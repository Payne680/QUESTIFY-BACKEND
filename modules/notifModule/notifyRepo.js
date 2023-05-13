const Notification = require("./notif");
const { signToken } = require("../services/jwt");
const User = require("../user/users");
const Project = require("../projectModule/project");
const sendEmail = require("../services/emailService/sendEmail");

class notifyRepository {
  getAllNotification() {
    return Notification.findAll();
  }

  getNotificationById(id) {
    return Notification.findByPk(id);
  }

  async getAllNotificationsDetail({ data }) {
    const user = await User.findOne({ where: { emailAddress: data.email } })
    const project = await Project.findByPk(data.projectId)
    return ({ user, project })
  }

  async createNotification(emailArr, projectId) {
    return await Notification.bulkCreate(emailArr.map( async ({ email }) => {
      const inviteToken = signToken({ email, projectId });
      const project = findByPk(projectId)
      const url = `${process.env.BASE_URL}/invite/${inviteToken}`

      await sendEmail(email, `Invitation to workspace ${project.title}`, `You have been invited to work on the ${project.title} workspace. Please click the link below to accept the invitation <br> ${url}`)
      return { email, inviteToken };
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
