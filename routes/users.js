var express = require("express");
const UserController = require("../modules/user/userController");
var router = express.Router();


const userController = new UserController();

/* GET users listing. */
router.get("/", userController.getAllUsers.bind(userController));
router.get("/:id", userController.getOneUser.bind(userController));
router.post("/", userController.createOneUser.bind(userController));
router.put("/:id", userController.patchOneUser.bind(userController));
router.delete("/:id", userController.deleteOneUser.bind(userController));
module.exports = router;
