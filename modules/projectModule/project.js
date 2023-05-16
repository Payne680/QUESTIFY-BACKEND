const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Project = sequelize.define('project', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: DataTypes.STRING
},
  {
    paranoid: true,
    timestamps: true
  }
)

module.exports = Project