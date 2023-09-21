const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Flower }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Flower, { foreignKey: 'flowerId' });
    }
  }
  Comment.init({
    comment: {
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
    modelName: 'Comment',
  });
  return Comment;
};
