const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Task = sequelize.define(
  "card",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    /*   assignee: DataTypes.STRING,
  project_ID: DataTypes.INTEGER,
  priority: DataTypes.ENUM('Urgent', 'High', 'Normal', 'Low', 'Clear'), */
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Task;
