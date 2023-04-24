const { DataTypes } = require('sequelize');
const sequelize = require('.');

const Notification = sequelize.define('notification', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: DataTypes.STRING,
},
  {
    paranoid: true,
    timestamps: true
  }
)

module.exports = Notification