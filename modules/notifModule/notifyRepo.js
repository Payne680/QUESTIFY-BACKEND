const Notification = require("./notif");
const jwt = require("jsonwebtoken");
const { signToken } = require("../services/jwt");
let invite;

class notifyRepository {
  getAllNotification() {
    return Notification.findAll();
  }

  getNotificationById(id) {
    return Notification.findByPk(id);
  }

  createNotification(emailArr) {
    emailArr.forEach(async ({ email }) => {
      try {
        const inviteToken = await signToken(email);
        invite = await Notification.create({ email, inviteToken });
      } catch (err) {
        throw new Error('Internal server Error')
      }
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
