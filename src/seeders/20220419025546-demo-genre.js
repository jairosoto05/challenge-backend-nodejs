'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Genres', [{
      image: 'default-genre.jpg',
      name: 'Comedia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      image: 'default-genre.jpg',
      name: 'Aventura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genres', null, {});
  }
};
