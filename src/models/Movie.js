'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Movies.belongsToMany(models.Character, {
        through: 'Character_Movie',
        as: 'characters',
        foreignKey: 'movieId'
      });

      Movies.belongsTo(models.Genre, {
        foreignKey: 'genreId',
        as: 'genre'
      });
      
    }
  }
  Movies.init({
    image: {
      type: DataTypes.STRING,
      allowNull: false
  },
  title: {
      type: DataTypes.STRING,
      allowNull: false
  },
  creationDate: {
      type: DataTypes.DATE,
      allowNull: false
  },
  rating: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  genreId: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movies;
};