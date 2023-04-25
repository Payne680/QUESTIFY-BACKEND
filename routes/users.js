var express = require('express');
const { authMiddleware } = require('../modules/services/auth');
const UserController = require('../modules/user/userController');
var router = express.Router();


const userController = new UserController();

/* GET users listing. */
     router.get('/',Usercontoller.getAllUsers.bind(Usercontoller))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

module.exports = router;
