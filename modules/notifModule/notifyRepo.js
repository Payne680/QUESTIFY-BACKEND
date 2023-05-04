const Notification = require("./notif");
let invite;

class notifyRepository {
  getAllNotification() {
    return Notification.findAll();
  }

  getNotificationById(id) {
    return Notification.findByPk(id);
  }

  createNotification(notify) {
    console.log(1, notify);
    notify.forEach((element) => {
      invite = Notification.create(element);
    });
    return invite;
  }

  editNotification(notify, id) {
    return Notification.update(notify, { where: { id } });
  }

  dropNotification(id) {
    return Notification.destroy({ where: { id } });
  }
}

module.exports = notifyRepository;
