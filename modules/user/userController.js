const UserService = require("./userService");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  getAllUsers(req, res) {
    this.userService
      .getAllUsers(req.body)
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
  }

  getOneUser(req, res) {
    this.userService
      .getOneUser(req.params.id)
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
  }

  login(req, res) {
    const { emailAddress, password } = req.body;
    console.log(1, emailAddress, password);
    if (!(emailAddress && password)) {
      return res.status(406).send({ message: "Missing User Info" });
    }
    console.log(2, emailAddress, password);

    this.userService
      .login(emailAddress, password)
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(`error is ${err}`));
  }


  createOneUser(req, res) {
    const { name, emailAddress, password } = req.body;

    if (!(name && emailAddress && password)) {
      return res.status(406).send({ message: "Missing User Info" });
    }
    this.userService
      .addUser(name, emailAddress, password)
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
  }

  patchOneUser(req, res) {
    this.userService
      .editOneUser(req.body, req.params.id)
      .then((updatedUser) => res.status(202).send(updatedUser))
      .catch((err) => res.status(401).send(err));
  }

  deleteOneUser(req, res) {
    this.userService
      .deleteOneUser(+req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }
}

module.exports = UserController;
