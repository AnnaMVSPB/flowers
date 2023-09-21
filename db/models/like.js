const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Flower }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Flower, { foreignKey: 'flowerId' });
    }
  }
  Like.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    flowerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Flowers',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
