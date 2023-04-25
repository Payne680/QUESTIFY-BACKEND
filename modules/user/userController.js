const UserService = require("./userService");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  getAllUsers(req, res) {
    this.userService.getAllUsers();

    res.status(200).send(this.userService.getAllUsers());
  }

  getOneUser(req, res) {
    this.userService
      .getOneUser(req.params.id)
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
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

// const patchOneUser = async (req, res) => {
//   const user = await User.findOne({ where: { id: +req.params.id } });

//   if (!user) return res.status(401).send("{ user does not exist }");

//   await User.update(req.body, { where: { id: +req.params.id } });

//   const updatedUser = await User.findOne({ where: { id: req.params.id } });

//   res.status(202).send(updatedUser);
// };

/* console.log('this userController in controller', UserController, new UserController()) */

module.exports = UserController;
