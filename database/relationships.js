const sequelize = require(".");
const Notification = require("../modules/notifModule/notif");
const Project = require("../modules/projectModule/project");
const State = require("../modules/stateModule/state");
const Task = require("../modules/taskModule/task");
const User = require("../modules/user/users");
function relate() {

  sequelize.sync();

  User.hasMany(Task);
  Task.belongsTo(User);


  Task.hasMany(Notification);
  Notification.belongsTo(Task);

  Task.hasMany(State);
  State.belongsTo(Task);

  Project.hasMany(Task);
  Task.belongsTo(Project);

  User.belongsToMany(Project, { through: "user_project" });
  Project.belongsToMany(User, { through: "user_project" });

  

  sequelize.sync();
}
module.exports = relate;
