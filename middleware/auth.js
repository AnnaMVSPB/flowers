const { User } = require('../db/models');

async function auth(req, res, next) {
  if (req.session.user) {
    const user = await User.findOne({ where: { id: req.session.user.id } });
    res.locals.user = { id: user.id, name: user.name };
  }
  next();
}

module.exports = auth;
