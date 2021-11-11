const Router = require('koa-router');
import * as postsCtl from './posts.ctl';

const posts = new Router();
// const printInfo = ctx => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };

posts.get('/', postsCtl.list);
posts.post('/', postsCtl.write);
posts.get('/:id', postsCtl.checkObjectId, postsCtl.read);
posts.delete('/:id', postsCtl.checkObjectId, postsCtl.remove);
posts.patch('/:id', postsCtl.checkObjectId, postsCtl.update);

module.exports = posts;