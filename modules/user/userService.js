const User = require("../../modules/user/users");

const bcrypt = require("bcrypt");
const uuid = require("uuid");
const UserRepository = require("./userRepo");
const { signToken } = require("../services/jwt");

class UserService {
  constructor() {
    this.userRepo = new UserRepository(); 
  }
  async getAllUsers() {
    const allUsers = await this.userRepo.getAllUser();
    return allUsers;
  }

  async login(emailAddress, password) {
    console.log(3, emailAddress, password);

    try {
      console.log(4, emailAddress, password);

      const user = await this.userRepo.getUserByEmail(emailAddress);
      const loginInfo = user && (await bcrypt.compare(password, user.password));
      if (loginInfo) {
        console.log(5, emailAddress, password);
        console.log(user)

        const token = signToken({ emailAddress: user.emailAddress });
        console.log(token)
        return token;
      }
      if (!loginInfo) {
        console.log(6, emailAddress, password);

        return "Email or Password incorrect";
      }
    } catch (err) {
      throw new Error("COULD_NOT_LOGIN_USER");
    }
  }


  async getOneUser(id) {
    const oneUsers = await this.userRepo.getUserById(id);
    return oneUsers;
  }

  async addUser(name, emailAddress, password ) {
    try {
      const hash = await bcrypt.hash(password, +process.env.SALT_ROUNDS)

      const newUser = await this.userRepo.createUser({
        name,
        emailAddress,
        password: hash
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

}

module.exports = UserService;