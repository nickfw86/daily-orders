const dbConnection = require("./mysqlConnection");
const formatResults = require("./removeCustomerDetails");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const createCsv = require("./createCsv");

let writeCsv = function(){
dbConnection.query("Select * from orders ORDER BY `Order_ID` DESC", (err, results) =>{
    if(err) throw err;
    if (results.length === 0) {
        console.log('No data to send');
        process.exit(1)};
    let formattedResults = formatResults(results);
    createCsv(formattedResults);
});
dbConnection.end();
};

module.exports = writeCsv;

