const sequelize = require(".");
const Project = require("../modules/projectModule/project");
const State = require("../modules/stateModule/state");
const Notification = require("./notif");
const Task = require("./task");
const User = require('./users');

function relate() {
  sequelize.sync
  User.hasMany(Task);
  Task.belongsTo(User);

  Task.hasMany(Notification);
  Notification.belongsTo(Task);

  Task.hasMany(State);
  State.belongsTo(Task);

  User.belongsToMany(Project);
  Project.belongsToMany(User);
}