const formatResults = require("./removeCustomerDetails");

let resIn = [
  {
    Order_ID: "1234",
    Customer_Name: "Bob Smith",
    Adress_Line_1: "Street 1",
    Adress_Line_2: "Apt 2",
    City: "Atlanta",
    State: "GA",
    Zip: "30318",
    Country: "US",
    Products_SKU: "Prod1",
    Shipping_Method: "Fixed",
    Shipping_Cost: 5,
    Order_Total: 65,
    Customer_Phone: "8675309"
  },
  {
    Order_ID: "1234",
    Customer_Name: "Bob Smith",
    Adress_Line_1: "Street 1",
    Adress_Line_2: "Apt 2",
    City: "Atlanta",
    State: "GA",
    Zip: "30318",
    Country: "US",
    Products_SKU: "Prod1",
    Shipping_Method: "Fixed",
    Shipping_Cost: 5,
    Order_Total: 65,
    Customer_Phone: "8675309"
  },
  {
    Order_ID: "1234",
    Customer_Name: "Bob Smith",
    Adress_Line_1: "Street 1",
    Adress_Line_2: "Apt 2",
    City: "Atlanta",
    State: "GA",
    Zip: "30318",
    Country: "US",
    Products_SKU: "Prod1",
    Shipping_Method: "Fixed",
    Shipping_Cost: 5,
    Order_Total: 65,
    Customer_Phone: "8675309"
  }
];
const resOut = [
  {
    Order_ID: "1234",
    Customer_Name: "Bob Smith",
    Adress_Line_1: "Street 1",
    Adress_Line_2: "Apt 2",
    City: "Atlanta",
    State: "GA",
    Zip: "30318",
    Country: "US",
    Products_SKU: "Prod1",
    Shipping_Method: "Fixed",
    Shipping_Cost: 5,
    Order_Total: 65,
    Customer_Phone: "8675309"
  },
  {
    Order_ID: "1234",
    Customer_Name: " ",
    Adress_Line_1: " ",
    Adress_Line_2: " ",
    City: " ",
    State: " ",
    Zip: " ",
    Country: " ",
    Products_SKU: "Prod1",
    Shipping_Method: " ",
    Shipping_Cost: " ",
    Order_Total: " ",
    Customer_Phone: " "
  },
  {
    Order_ID: "1234",
    Customer_Name: " ",
    Adress_Line_1: " ",
    Adress_Line_2: " ",
    City: " ",
    State: " ",
    Zip: " ",
    Country: " ",
    Products_SKU: "Prod1",
    Shipping_Method: " ",
    Shipping_Cost: " ",
    Order_Total: " ",
    Customer_Phone: " "
  }
];

test('removes customer fields of child rows.', () => {
  expect(formatResults(resIn)).toEqual(resOut);
});