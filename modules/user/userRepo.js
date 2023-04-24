const UserRepository = require("./user.repo");

const bcrypt = require("bcrypt");
const uuid = require("uuid");

class UserService {
  constructor() {
    this.userRepo = new UserRepository(); 
  }
  async getAllUsers() {
    const allUsers = await this.userRepo.getAllUser();
    return allUsers;
  }

  async registerUser(name, password, email_address) {
    try {
      const hash = await bcrypt.hash(password, +process.env.SALT_ROUNDS)

      const newUser = await this.userRepo.createUser({
        name,
        email_address,
        password: hash,
      })

      return newUser;
    }
    catch(err) {
      throw new Error("COULD_NOT_REGISTER_USER");
    }
  }

  async editOneUser(userToEdit, id) {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("USER_DOES_NOT_EXIST");

    await this.userRepo.editUser(userToEdit, id);

    const updatedUser = await this.userRepo.getUserById(id);

    return updatedUser;
  }

  async deleteOneUser(id) {
    try {
      await this.userRepo.dropUser(id);
    } catch {
      throw new Error("COULD_NOT_DELETE_USER");
    }
  }

  /* 
    ma bro Kadji, i'm sure you are to write the login function here as well,
    remember that getUserByEmail(emai_address) is 
    allready in the UserRepository class
  */
}

module.exports = UserService;