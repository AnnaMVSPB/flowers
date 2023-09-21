const ReactDOMServer = require('react-dom/server');
const React = require('react');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const RegForm = require('../components/RegForm');
const { User } = require('../db/models');

router.get('/registration', (req, res) => {
  res.renderComponent(RegForm, { title: 'RegForm' });
});

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hash });
    req.session.user = { id: user.id, name: user.name };

    res.json({ message: 'ok' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid')
      .json({ message: 'Успешный выход' });
    // res.redirect('/');
  });
});
module.exports = router;
