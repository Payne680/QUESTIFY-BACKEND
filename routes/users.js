var express = require("express");
const UserController = require("../modules/user/userController");
var router = express.Router();


const userController = new UserController();

/* GET users listing. */
     router.get('/', userController.getAllUsers.bind(userController))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

module.exports = router;
