var express = require("express");
const TaskController = require("../modules/taskModule/taskController");
var router = express.Router();

const taskController = new TaskController();

/* GET task listing. */
router.get("/", taskController.getAllTasks.bind(taskController));
router.get("/:id", taskController.getOneTask.bind(taskController));
router.post("/", taskController.createOneTask.bind(taskController));
router.put("/:id", taskController.patchOneTask.bind(taskController));
router.delete("/:id", taskController.deleteOneTask.bind(taskController));

module.exports = router;
