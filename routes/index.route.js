const router = require('express').Router();
const flowersRouter = require('./views/flowers.route');
const authRouter = require('./auth.route');
const mainRouter = require('./views/main.route');
const flowersApiRouter = require('./api/flowers.api.route');

router.use('/', mainRouter);
router.use('/flowers', flowersRouter);
router.use('/auth', authRouter);
router.use('/api/flowers', flowersApiRouter);

module.exports = router;
