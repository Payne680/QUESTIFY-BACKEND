var express = require("express");
const { authMiddleware } = require("../modules/services/auth");
const TaskController = require("../modules/taskModule/taskController");
var router = express.Router();

const taskController = new TaskController();

/* GET task listing. */
router.get("/", authMiddleware, taskController.getAllTasks.bind(taskController));
router.get("/:id", authMiddleware, taskController.getOneTask.bind(taskController));
router.post("/", authMiddleware, taskController.createOneTask.bind(taskController));
router.put("/:id", authMiddleware, taskController.patchOneTask.bind(taskController));
router.delete("/:id", authMiddleware, taskController.deleteOneTask.bind(taskController));

module.exports = router;
