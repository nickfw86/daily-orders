require("dotenv").config();
const mysql = require("mysql");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const nodemailer = require("nodemailer");
const clearOrders = require("./clearTable");

//Connect to MySQL DB
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
connection.connect();
//Query the orders table
connection.query("Select * from orders ORDER BY `Order_ID` DESC", function(
  error,
  results
) {
  if (error) throw error;
  if (results.length == 0) {process.exit(1)};
  //This loop formats results so only the first row of an order contains customer information.
  for (let i = 1; i < results.length; i++) {
    if (results[i].Order_ID == results[i - 1].Order_ID) {
      results[i].Customer_Name = " ";
      results[i].Adress_Line_1 = " ";
      results[i].Adress_Line_2 = " ";
      results[i].City = " ";
      results[i].State = " ";
      results[i].Zip = " ";
      results[i].Country = " ";
      results[i].Shipping_Method = " ";
      results[i].Shipping_Cost = " ";
      results[i].Order_Total = " ";
      results[i].Customer_Phone = " ";
    }
  }
  var csvWriter = createCsvWriter({
    path: process.env.FILE_PATH,
    header: [
      { id: "Order_ID", title: "Order_ID" },
      { id: "Customer_Name", title: "Customer_Name" },
      { id: "Adress_Line_1", title: "Adress_Line_1" },
      { id: "Adress_Line_2", title: "Adress_Line_2" },
      { id: "City", title: "City" },
      { id: "State", title: "State" },
      { id: "Zip", title: "Zip" },
      { id: "Country", title: "Country" },
      { id: "Products_SKU", title: "Products_SKU" },
      { id: "UPC", title: "UPC" },
      { id: "Products_Qty", title: "Products_Qty" },
      { id: "Item_Price", title: "Item_Price" },
      { id: "Shipping_Method", title: "Shipping_Method" },
      { id: "Shipping_Cost", title: "Shipping_Cost" },
      { id: "Order_Total", title: "Order_Total" },
      { id: "Customer_Phone", title: "Customer_Phone" }
    ]
  });
  //Write the query results to the csv file defined above.
  csvWriter.writeRecords(results).then(() => {
    console.log("...Done");
  });
}); //end call back of connect.query
connection.end();
//Send CSV via gmail using nodemailer
async function main() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: "New Orders",
    html: "<p>Please find today's orders attached.</p><p>Thank you</p>",
    attachments: [
      {
        filename: "orders.csv",
        path: process.env.FILE_PATH
      }
    ]
  });

  console.log("Message sent: %s", info.messageId);
  //Once the orders are sent clear orders.
  clearOrders();
}
main().catch(console.error);
