const { DataTypes } = require('sequelize');
const sequelize = require('.');

const Project = sequelize.define('project', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  ownerID: DataTypes.INTEGER,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
  status: DataTypes.STRING
},
  {
    paranoid: true,
    timestamps: true
  }
)

module.exports = Project