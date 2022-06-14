const Vol = require('../models/volunters');

const vol_index = (req, res) => {
  res.send("hi vol");
}

const vol_form = (req, res) => {
  res.render('vol_form')
}

const vol_add = (req, res) => {
  console.log(req.body)
  res.send('vol addding');
}

module.exports = {
  vol_index, 
  vol_form, 
  vol_add, 
}