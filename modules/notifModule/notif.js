const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Notification = sequelize.define('notification', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  }
},
  {
    paranoid: true,
    timestamps: true
  }
)

module.exports = Notification