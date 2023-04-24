const sequelize = require(".");
const Project = require("./project");
/* const State = require("./state"); */
const Notification = require("./notif");
const Task = require("./task");
const User = require("./users");

function relate() {
  sequelize.sync();

  User.hasMany(Task);
  Task.belongsTo(User);

  Task.hasMany(Notification);
  Notification.belongsTo(Task);
/* 
  Task.hasMany(State);
  State.belongsTo(Task); */

  User.belongsToMany(Project, { through: "user_project" });
  Project.belongsToMany(User, { through: "user_project" });

  sequelize.sync();
}
module.exports = relate;
