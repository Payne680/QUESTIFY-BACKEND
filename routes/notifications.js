var express = require("express");
const notifyController = require("../modules/notifModule/notifyController");
const { authMiddleware } = require("../modules/services/auth");
var router = express.Router();

const notificationController = new notifyController();

/* GET notification listing. */
router.get("/", notificationController.getAllNotify.bind(notificationController));
router.get("/verify", notificationController.verifyInvite.bind(notificationController));
router.post("/confirm",authMiddleware, notificationController.confirmInvite.bind(notificationController));
router.get("/:id", notificationController.getOneNotify.bind(notificationController));
router.post("/", authMiddleware, notificationController.addNotify.bind(notificationController));
router.put("/:id", authMiddleware, notificationController.patchOneNotification.bind(notificationController));
router.delete("/:id", authMiddleware, notificationController.deleteOneNotification.bind(notificationController));
router.get("confirm/:token", notificationController.getNotificationDetails.bind(notificationController))


module.exports = router;
