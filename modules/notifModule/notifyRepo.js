
const Notification = require("./notif");

class notifyRepository {
  getAllNotifications() {
    return Notification.findAll();
  }

  getNotificationById(id) {
    return Notification.findByPk(id);
  }

  createNotification() {
    return Notification.create(notify);
  }

  editNotification(notify, id) {
    return Notification.update(notify, { where: { id } });
  }

  dropNotification(id) {
    return Notification.destroy({ where: { id } });
  }
}

module.exports = notifyRepository;