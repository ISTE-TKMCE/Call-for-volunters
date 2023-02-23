const {Volunters} =  require('../models')
const mailController = require("./mailController");

const index = (req, res) => {
  res.render("vol");
};

const success = (req, res) => {
  res.render("vol_success");
};  

const add = (req, res) => {
  console.log(req.body);
  // mailController.sendmail(req, res);

  Volunters.create(req.body)
    .then((result) => {
      console.log("success")
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
  success,
};
