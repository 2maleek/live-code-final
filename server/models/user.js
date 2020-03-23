'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model{}
  User.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {
          msg: 'name cannot be empty'
        },
        notNull:{
          msg: 'name cannot be null'
        }
      }
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {
          msg: 'username cannot be empty'
        },
        notNull:{
          msg: 'username cannot be null'
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {
          msg: 'password cannot be empty'
        },
        notNull:{
          msg: 'password cannot be null'
        }
      }
    }
  }, { sequelize })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};