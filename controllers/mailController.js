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
    to: req.body.email,
    subject: "Welcome to Athena'23!",
    html: `<center> <img src="https://iste-tkmce.github.io/TOOLS/logomail.jpg" alt="athena logo" width="100" ></center>Greetings from ISTE TKMCE,<br><br>
      Great to have you on board, ${req.body.name} ! You are the Face of Athena'23 at ${req.body.college} ! <br><br>
      We will get in touch with you soon. <br><br>
      Your code is : <b>${(req.body.name).split(' ')[0]}_${(req.body.phone).slice((req.body.phone).length - 4, (req.body.phone))}</b>
      <br><br>
      Regards,<br>
      Team Athena'23 <br>
      ISTE TKMCE`
  };
  console.log('sending response')
  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });


};

module.exports = {
  sendmail,
};
