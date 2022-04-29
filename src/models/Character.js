'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      Character.belongsToMany(models.Movie, {
        through: 'Character_Movie',
        as: 'movies',
        foreignKey: 'characterId'
      });
    }
  }
  Character.init({
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    history: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};