'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ambassador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ambassador.init({
    name:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    department:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    password:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    phone:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    phone2:  {
      type: DataTypes.STRING,
      allowNull:true,
    },
    college:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    year:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    district:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    email:  {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        notEmpty:true
      }
    },



  }, {
    sequelize,
    modelName: 'Ambassador',
  });
  return Ambassador;
};