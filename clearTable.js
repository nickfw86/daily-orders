const mysql = require("mysql");
//Connection params for mysql
function clearOrders() {
  var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

  connection.connect();

  //Query mysql. Results from callback saved to csv on desktop.
  connection.query("DELETE from `orders`", function(error) {
    if (error) throw error;
  }); //end call back

  connection.end();
}
module.exports = clearOrders;
