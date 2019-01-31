import * as Koa from 'koa';
import * as Router from 'koa-router';

const DEFAULT_PORT = 3000;
const app = new Koa();
const router = new Router();

router.get('/getProducts', (ctx) => {
  ctx.body = ctx.query;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(DEFAULT_PORT, () => {
  console.log(`Listening to port ${DEFAULT_PORT} ... http://localhost:3000/`);
});
