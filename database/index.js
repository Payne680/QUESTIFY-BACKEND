const { Sequelize } = require('sequelize');
const { config } = require('dotenv');

config()

const sequelize = new Sequelize(
  questify,
  root,
  undefined,
  {
  host: localhost,
  dialect: 'mysql',
}
)

module.exports = sequelize;