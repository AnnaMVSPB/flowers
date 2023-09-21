const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Flower, Comment, Like }) {
      this.hasMany(Flower, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.hasMany(Like, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
