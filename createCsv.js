require("dotenv").config();
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const head = [
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
];
let createCSV = function(results) {
  let csvWriter = createCsvWriter({
    path: process.env.FILE_PATH,
    header: head
  });
  //Write the query results to the csv file defined above.

  csvWriter.writeRecords(results);
  console.log("CSV Created");
};

module.exports = createCSV;
module.exports = head;