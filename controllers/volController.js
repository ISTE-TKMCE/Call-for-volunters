const Vol = require('../models/volunters');
const mailController = require('./mailController')


const vol_index = (req, res) => {
  res.send("hi vol");
}

const vol_form = (req, res) => {
  res.render('vol_form')
}

const vol_add = (req, res) => {
  console.log(req.body)
  mailController.sendmail(req,res);
  res.json({ message: "message send" });
}

module.exports = {
  vol_index, 
  vol_form, 
  vol_add, 
}