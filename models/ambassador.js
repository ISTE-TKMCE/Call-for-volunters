const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const schema = new Schema({
  name: String,
  department: String,
  password: String,
  phone: String,
  phone2: String,
  college: String,
  year: String,
  district: String,
  email: {
    type: String, unique: true
  }
});
const Ambassador = mongoose.model("Ambassador", schema);
module.exports = Ambassador