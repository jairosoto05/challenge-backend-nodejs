'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Character_Movies', {
      characterId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'Characters',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      movieId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'Movies',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Character_Movies');
  }
};