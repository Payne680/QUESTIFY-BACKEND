var express = require("express");
const { authMiddleware } = require("../modules/services/auth");
const StateController = require("../modules/stateModule/stateController");
var router = express.Router();

const stateController = new StateController();

/* GET State listing. */
router.get("/", authMiddleware, stateController.getAllStates.bind(stateController));
router.get("/:id", authMiddleware, stateController.getOneState.bind(stateController));
router.post("/", authMiddleware, stateController.createOneState.bind(stateController));
router.put("/:id", authMiddleware, stateController.patchOneState.bind(stateController));
router.delete("/:id", authMiddleware, stateController.deleteOneState.bind(stateController));
module.exports = router;
