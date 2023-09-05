const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Filling extends Model {
    static associate(models) {
      // define association here
    }
  }
  Filling.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Filling',
  });
  return Filling;
};
