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
  const code = `${(req.body.name).split(' ')[0]}_${(req.body.phone).slice((req.body.phone).length-4,(req.body.phone))}`
  Ambassador.create(req.body)
    .then((result) => {
      res.json({ Ok: true });
    })
    .catch((err) =>{ 
      console.log(err)
      err.name == 'SequelizeUniqueConstraintError' ? res.json({ Ok: false , repeat:true }) : res.json({ Ok: false });
    });
    mailController.sendmail(req, res).then(response=>console.log(response)).catch(err=>console.log(err));

  
};

module.exports = {
  index,
  add,
  form,
  success,
};
