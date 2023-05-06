const Notification = require("./notif");
const { signToken } = require("../services/jwt");

class notifyRepository {
  getAllNotification() {
    return Notification.findAll();
  }

  getNotificationById(id) {
    return Notification.findByPk(id);
  }

  async createNotification(emailArr, projectId) {
    return await Notification.bulkCreate(emailArr.map(({email}) => {
      const inviteToken = signToken({ email, projectId });
      return {email, inviteToken};
    }));
  }

  editNotification(notify, id) {
    return Notification.update(notify, { where: { id } });
  }

  dropNotification(id) {
    return Notification.destroy({ where: { id } });
  }
}

module.exports = notifyRepository;
