const {Ambassador} =  require('../models')
const mailController = require("./mailController");

const index = (req, res) => {
  res.render("ca_main");
};

const form = (req, res) => {
  res.render("ca_form");
};

const success = (req, res) => {
  res.render("ca_success");
};

const add = (req, res) => {
  console.log(req.body);
  mailController.sendmail(req, res);

  Ambassador.create(req.body)
    .then((result) => {
      res.json({ Ok: true });
    })
    .catch((err) =>{ 
      console.log(err)
      err.name == 'SequelizeUniqueConstraintError' ? res.json({ Ok: false , repeat:true }) : res.json({ Ok: false });
    });
};

module.exports = {
  index,
  add,
  form,
  success,
};
