const Project = require("../projectModule/project");
const User = require("./users");
class UserRepository {
  getAllUser() {
    return User.findAll({include: Project});
  }

  getUserById(id) {
    return User.findByPk(id, {include: Project});
  }

  createUser(user) {
    return User.create(user);
  }

  editUser(user, id) {
    return User.update(user, { where: { id } });
  }

  dropUser(id) {
    return User.destroy({ where: { id } });
  }
}

module.exports = UserRepository;