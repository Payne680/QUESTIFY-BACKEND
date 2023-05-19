var express = require("express");
const ProjectController = require("../modules/projectModule/projectController");
const { authMiddleware, authAdmin } = require("../modules/services/auth");
var router = express.Router();

const projectController = new ProjectController();

/* GET project listing. */
router.get("/",  projectController.getAllProjects.bind(projectController));
router.get("/:id", authMiddleware, projectController.getOneProject.bind(projectController));
router.post("/", authMiddleware, projectController.createOneProject.bind(projectController));
router.put("/:id", authMiddleware, projectController.patchOneProject.bind(projectController));
router.delete("/:id", authMiddleware, authAdmin, projectController.deleteOneProject.bind(projectController));
module.exports = router;
