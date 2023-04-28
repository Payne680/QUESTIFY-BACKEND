const app = require('../../app');
const User = require('../user/users');
const { verifyToken } = require('./jwt');

const authMiddleware = async (req, res, next) => {
  const authorization = req.get('authorization');
  const token = authorization?.split(" ").pop();
  if(token){
    try{
      const { data } = verifyToken(token);
      const user = await User.findByPK(data.id);
      if(!user) return res.sendStatus(401);
      req.user = user;
    } catch (e) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
}

const authAdmin = async (req, res, next) => {
  if (req.user.is_admin) {
    next()
  } else {
    res.sendStatus(401);
  }
};

module.exports = { authMiddleware, authAdmin }