var express = require("express");
const StateController = require("../modules/stateModule/stateController");
var router = express.Router();

const stateController = new StateController();

/* GET State listing. */
router.get("/", stateController.getAllStates.bind(stateController));
router.get("/:id", stateController.getOneState.bind(stateController));
router.post("/", stateController.createOneState.bind(stateController));
/* router.post("/task", stateController.createOneStates.bind(stateController)); */
router.put("/:id", stateController.patchOneState.bind(stateController));
router.delete("/:id", stateController.deleteOneState.bind(stateController));
module.exports = router;
