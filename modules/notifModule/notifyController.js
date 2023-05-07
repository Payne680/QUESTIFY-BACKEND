
const Project = require("../projectModule/project");
const User = require("../user/users");
const NotifyService = require("./notifyService");

class notifyController {
  constructor() {
    this.NotifyService = new NotifyService();
  }

  getAllNotify(req, res) {
    this.NotifyService.getAllNotifications(req.body)
      .then((notify) => res.status(201).send(notify))
      .catch((err) => res.status(500).send(err));
  }

  getOneNotify(req, res) {
    this.NotifyService.getOneNotification(req.params.id)
      .then((notify) => res.status(201).send(notify))
      .catch((err) => res.status(500).send(err));
  }

  async getNotificationDetails(req, res) {
    const { data } = await jwt.verify(req.params.token);
    this.NotifyService.getAllNotificationsDetail({ data })
    .then((details) => res.status(201).send(details))
    .catch((err) => res.status(500).send(err)); en
    // try {
    //   const { data } = await jwt.verify(req.params.token);
    //   const user = await User.findOne({ where: { emailAddress: data.email } })
    //   const project = await Project.findByPk(data.projectId)
    //   res.send({ user, project })
    // } catch (e) {
    //   res.send('error');
    // }
  };

  addNotify(req, res) {
    const email = req.body;

    if (email.length === 0) {
      return res.status(406).send({ message: "Missing notify Info" });
    }

    this.NotifyService.addNotification(email)
      .then((notify) => res.status(201).send(notify))
      .catch((err) => res.status(500).send(err));
    console.log(notify)
  }

  patchOneNotification(req, res) {
    this.NotifyService.editOneNotification(req.body, req.params.id)
      .then((updatednotify) => res.status(202).send(updatednotify))
      .catch((err) => res.status(401).send(err));
  }

  deleteOneNotification(req, res) {
    this.NotifyService.deleteOneNotification(+req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }
}

// const patchOnenotify = async (req, res) => {
//   const notify = await notify.findOne({ where: { id: +req.params.id } });

//   if (!notify) return res.status(401).send("{ notify does not exist }");

//   await notify.update(req.body, { where: { id: +req.params.id } });

//   const updatednotify = await notify.findOne({ where: { id: req.params.id } });

//   res.status(202).send(updatednotify);
// };

/* console.log('this notifyController in controller', notifyController, new notifyController()) */

module.exports = notifyController;
