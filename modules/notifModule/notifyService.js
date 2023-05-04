const notifyRepository = require("./notifyRepo");

class notifyService {
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

  async addNotification(email) {
    console.log(2, email);
    try {
      const newNotification = await this.notifyRepo.createNotification(email);
      return newNotification;
    } catch (err) {
      console.log(3, err);
      throw new Error("COULD_NOT_REGISTER_Notification");
    }
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

module.exports = notifyService;