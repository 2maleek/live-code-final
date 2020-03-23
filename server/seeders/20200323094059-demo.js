'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
    return queryInterface.bulkInsert('Reports', 
    [
      {
        report: 2,
        CountryId: 3,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        report: 10,
        CountryId: 3,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        report: 7,
        CountryId: 5,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reports', null, {});
  }
};
