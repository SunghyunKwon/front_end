require('dotenv').config()
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const api = require('./api');
import jwtMiddleware from './lib/jwtMiddleware';

import createFakeData from './createFakeData';

const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI)
.then(() => {
  console.log('Connect to MongoDB');

  createFakeData();
})
.catch(e => {
  console.log(e);
})

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'Home';
});

router.get('/about', ctx => {
  ctx.body = 'About';
});

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port 4000')
});