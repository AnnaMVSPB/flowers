const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flower extends Model {
    static associate({ User, Comment, Like }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'flowerId' });
      this.hasMany(Like, { foreignKey: 'flowerId' });
    }
  }
  Flower.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flower',
  });
  return Flower;
};
