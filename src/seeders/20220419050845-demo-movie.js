'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      image: 'default-movieseries.jpg',
      title: 'Monsters, Inc.',
      creationDate: '2001-03-31',
      rating: 5,
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      image: 'default-movieseries.jpg',
      title: 'Valiente',
      creationDate: '2012-11-22',
      rating: 5,
      genreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
