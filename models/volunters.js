'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Volunters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Volunters.init({

    // columns
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        notEmpty:true
      }
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },

    year: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },

    branch: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },

    branch: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },

    college: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    p1: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    p2: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    p3: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },



  }, {
    sequelize,
    modelName: 'Volunters',
  });
  return Volunters;
};