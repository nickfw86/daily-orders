let formatResults = function(results) {
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
  return results
};

module.exports = formatResults;
