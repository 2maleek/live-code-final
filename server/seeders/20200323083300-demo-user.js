'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [
      {
        name: 'John Doe',
        username: 'john',
        password: 'john',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test',
        username: 'test',
        password: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fore',
        username: 'fore',
        password: 'fore',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
