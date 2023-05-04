var express = require("express");
const ProjectController = require("../modules/projectModule/projectController");
var router = express.Router();

const projectController = new ProjectController();

/* GET project listing. */
router.get("/", projectController.getAllProjects.bind(projectController));
router.get("/:id", projectController.getOneProject.bind(projectController));
router.post("/", projectController.createOneProject.bind(projectController));
router.put("/:id", projectController.patchOneProject.bind(projectController));
router.delete("/:id", projectController.deleteOneProject.bind(projectController));
module.exports = router;
