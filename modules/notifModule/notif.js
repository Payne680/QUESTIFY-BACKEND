const { DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../../database');

const Notification = sequelize.define('notification', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  inviteToken: {
    type: DataTypes.STRING,
    unique: true,
  },
  inviteConfirm: DataTypes.BOOLEAN
},
  {
    paranoid: true,
    timestamps: true
  }
)

module.exports = Notification