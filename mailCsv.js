require("dotenv").config();
const nodemailer = require("nodemailer");

const sendCsv = async function() {
  //try{
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
        filename: "Orders_Test.csv",
        path: "/Users/nickwatson/Desktop/Orders_Test.csv"
      }
    ]
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = sendCsv;
