'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Country extends Model {}
  Country.init(
    {
      name: {
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
      cases: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          notEmpty: {
            msg: 'cases cannot be empty'
          },
          notNull:{
            msg: 'cases cannot be null'
          }
        }
      },
      deaths: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          notEmpty: {
            msg: 'death cannot be empty'
          },
          notNull:{
            msg: 'death cannot be null'
          }
        }
      },
      recovered: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          notEmpty: {
            msg: 'recovered cannot be empty'
          },
          notNull:{
            msg: 'recovered cannot be null'
          }
        }
      }
    },
    {
      sequelize
    }
  );
  Country.associate = function(models) {
    // associations can be defined here
    // Country.hasMany(models.Report);
  };
  return Country;
};
