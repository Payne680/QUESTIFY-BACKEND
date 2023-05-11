const app = require('../../app');
const User = require('../user/users');
const { verifyToken } = require('./jwt');

const authMiddleware = async (req, res, next) => {
  const authorisation = req.get('authorization');
  const token = authorisation?.split(" ").pop();
  console.log(token)
  if (token) {
    try {
      const { data } = verifyToken(token);
      console.log(23, data)
      const user = await User.findByPk(data.user_id);
      if (!user) return res.sendStatus(401);
      req.user = user;
      next();
    } catch (e) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

// const authAdmin = async (req, res, next) => {
//   if (req.user.is_admin) {
//     next()
//   } else {
//     res.sendStatus(401);
//   }
// };

module.exports = { authMiddleware }