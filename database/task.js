const { DataTypes } = require('sequelize');
const sequelize = require('.');

const Task = sequelize.define('task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  project_ID: DataTypes.INTEGER,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
  status: DataTypes.STRING
},
  {
    paranoid: true,
    timestamps: true
  }
)

module.exports = Task;