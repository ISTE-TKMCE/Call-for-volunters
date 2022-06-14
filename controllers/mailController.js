require('dotenv').config()
const { append } = require("express/lib/response");
const nodemailer = require("nodemailer");
// mail Config
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
  auth: {
    user: process.env.EMAILID,
    pass: process.env.EMAILPASS,
  },
});

const sendmail = (req, res) => {
 
    const mailOptions = {
      from: "support@istetkmce.in",
      to: "aravindkrishnanparayil@gmail.com",
      subject: "ISTE : Contact Form response",
      text: `name : ${req.body.name} <br><br> email: ${req.body.email} <br><br> message:  ${req.body.message} <br><br>`,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

  console.log('sending response')
};

module.exports = {
  sendmail,
};
