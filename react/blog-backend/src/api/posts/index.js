const Router = require('koa-router');
import * as postsCtl from './posts.ctl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();
// const printInfo = ctx => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };

posts.get('/', postsCtl.list);
posts.post('/', checkLoggedIn, postsCtl.write);

const post = new Router();
post.get('/', postsCtl.read);
post.delete('/', checkLoggedIn, postsCtl.checkOwnPost, postsCtl.remove);
post.patch('/', checkLoggedIn, postsCtl.checkOwnPost, postsCtl.update);

post.use('/:id', postsCtl.getPostById, post.routes());

module.exports = posts;