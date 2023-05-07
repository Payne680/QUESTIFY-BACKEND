var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../modules/user/users");
const notifyRepository = require('../modules/notifModule/notifyRepo');
const sendEmail = require("../modules/services/emailService/sendEmail");
const Project = require("../modules/projectModule/project");

const passToken = new notifyRepository;

const token = passToken.createNotification.inviteToken

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req, res) => {
  console.log(token)
  const { userName, password } = req.body;
  const user = User.findOne({ where: { emailAddress: userName } })
  if (!user) {
    res.sendStatus(401);
  }

  bcrypt.compare(password, user.password, function (err, result) {
    if (err) {
      return res.sendStatus(401);
    }
    if (result) {
      if (user)
        token = signToken({ id: user.id, email: user.emailAddress })
      res.send({ user, token });
    } else {
      return res.sendStatus(401);
    }
  });
})

router.get('/confirmation/:token', async (req, res) => {
  try {
    const { data } = await jwt.verify(req.params.token);
    const user = await User.findOne({ where: { emailAddress: data.email } })
    const project = await Project.findByPk(data.projectId)
    res.send({user, project})
  } catch (e) {
    res.send('error');
  }
});

// router.post(`/invite/${inviteToken}`, () => {

// })
