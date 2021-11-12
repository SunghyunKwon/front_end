const Router = require('koa-router');
const posts = require('./posts');
import auth from './auth'

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.get('/test', ctx => {
  ctx.body = 'test is success';
});

module.exports = api;