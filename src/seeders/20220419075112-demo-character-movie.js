'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Character_Movies', [{
      characterId: 1,
      movieId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      characterId: 2,
      movieId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      characterId: 3,
      movieId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      characterId: 4,
      movieId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      characterId: 5,
      movieId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      characterId: 6,
      movieId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Character_Movies', null, {});
  }
};
