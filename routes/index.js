var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../modules/user/users");

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('login', (req, res) => {
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
