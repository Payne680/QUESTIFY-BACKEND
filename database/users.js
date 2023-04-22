const { DataTypes } = require("sequelize");
const sequelize = require('.');

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  emailAddress: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  is_admin: { type: DataTypes.BOOLEAN, defaultValue: false }
},
  {
    timestamps: true,
    paranoid: true
  }
)

module.exports = User;