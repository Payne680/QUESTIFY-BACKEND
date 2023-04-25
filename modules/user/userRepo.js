const User = require("../../database/users");

class UserRepository {
  getAllUser() {
    return User.findAll();
  }

  getUserById(id) {
    return User.findByPk(id);
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