const Ambassador = require("../models/ambassador")
const mailController = require("./mailController");
const mongoose = require("mongoose")
const mongoDB = process.env.MONGO_URI;
const index = (req, res) => {
  res.render("ca_main");
};

const form = (req, res) => {
  res.render("ca_form");
};

const success = (req, res) => {
  res.render("ca_success");
};

const add =async (req, res) => {
  await mongoose.connect(mongoDB);
  console.log(req.body);
  const ambassador = new Ambassador(req.body)
  ambassador.save()
    .then((result) => {
      res.json({ Ok: true });
    })
    .catch((err) =>{ 
      console.log(err)
      err.name == 'SequelizeUniqueConstraintError' ? res.json({ Ok: false , repeat:true }) : res.json({ Ok: false });
    });
    mailController.sendmail(req, res)
};

module.exports = {
  index,
  add,
  form,
  success,
};
