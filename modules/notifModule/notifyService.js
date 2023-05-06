const notifyRepository = require("./notifyRepo");

class NotifyService {
  constructor() {
    this.notifyRepo = new notifyRepository();
  }
  async getAllNotifications() {
    const allNotifications = await this.notifyRepo.getAllNotification();
    return allNotifications;
  }

  async getOneNotification(id) {
    const oneNotification = await this.notifyRepo.getNotificationById(id);
    return oneNotification;
  }

  async getAllNotificationsDetail({ data }) {
    return this.notifyRepo.getAllNotificationsDetail({ data })
  }


  async addNotification(emails, projectId) {
    return this.notifyRepo.createNotification(emails, projectId);
  }

  async editOneNotification(NotificationToEdit, id) {
    const Notification = await this.notifyRepo.getNotificationById(id);

    if (!Notification) throw new Error("Notification_DOES_NOT_EXIST");

    await this.notifyRepo.editNotification(NotificationToEdit, id);

    const updatedNotification = await this.notifyRepo.getNotificationById(id);

    return updatedNotification;
  }

  async deleteOneNotification(id) {
    try {
      await this.notifyRepo.dropNotification(id);
    } catch {
      throw new Error("COULD_NOT_DELETE_Notification");
    }
  }

  /* 
    ma bro , i'm sure you are to write the login function here as well,
    remember that getUserByEmail(emai_address) is 
    allready in the notifyRepository class
  */
}

module.exports = NotifyService;
