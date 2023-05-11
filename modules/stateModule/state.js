const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const State = sequelize.define('state', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: DataTypes.STRING,
}, {
  timestamps: true,
  paranoid: true
}
)

module.exports = State;