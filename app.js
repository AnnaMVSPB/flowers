require('@babel/register');
require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.route');

const PORT = process.env.PORT || 4000;
const app = express();
serverConfig(app);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`мои волки говорят ${PORT} PORT`));
