var express = require("express");
const notifyController = require("../modules/notifModule/notifyController");
var router = express.Router();

const notificationController = new notifyController();

/* GET notification listing. */
router.get("/", notificationController.getAllNotify.bind(notificationController));
router.get("/:id", notificationController.getOneNotify.bind(notificationController));
router.post("/", notificationController.addNotify.bind(notificationController));
router.put("/:id", notificationController.patchOneNotification.bind(notificationController));
router.delete("/:id", notificationController.deleteOneNotification.bind(notificationController));
module.exports = router;
