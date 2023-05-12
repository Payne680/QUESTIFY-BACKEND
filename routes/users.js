var express = require("express");
const  {authMiddleware}  = require("../modules/services/auth");
const UserController = require("../modules/user/userController");
var router = express.Router();

const userController = new UserController();

/* GET users listing. */
router.get("/", userController.getAllUsers.bind(userController));
router.get("/current-user", authMiddleware, userController.getCurrentUser.bind(userController));
router.get("/:id", userController.getOneUser.bind(userController));
router.post("/login", userController.login.bind(userController));
router.post("/", userController.createOneUser.bind(userController));
router.put("/:id", authMiddleware, userController.patchOneUser.bind(userController));
router.delete("/:id", authMiddleware, userController.deleteOneUser.bind(userController));
module.exports = router;
