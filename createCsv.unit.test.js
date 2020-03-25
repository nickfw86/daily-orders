const head = require('./createCsv');
const dbConnection = require("./mysqlConnection");
require("dotenv").config();

test('number query fields match csv header length.', done => {

dbConnection.query("Select * from orders ORDER BY `Order_ID` DESC", (err, results,fields) =>{
    try {
    if(err) throw err;
    expect(fields.length).toBe(head.length);
    done();
    } catch (error) {
        done(error);
    }
    });
dbConnection.end();
});