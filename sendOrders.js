require("dotenv").config();
const writeCsv = require("./queryToCsv");
const nodemailer = require("nodemailer");
const clearOrders = require("./clearTable");
const transporter = require("./mailCsv");
const filePath = process.env.FILE_PATH;
const sendCsv = require("./mailCsv");

const execute = () => {
  //try{
  writeCsv();
  sendCsv();
  clearOrders();
};

/*  
  }catch(error){
    throw new Error(error);
  }
  
}
*/
module.exports = execute;

