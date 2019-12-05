import { RouterContext } from 'koa-router';
import { tools } from '../utils';

const { decodeToken, getToken } = tools;

const auth = async (ctx: RouterContext, next: () => void) => {
  // get token from ctx.request
  const token = getToken(ctx.request);
  if (token) {
    try {
      // decode token and compare with token in cache => get userid
      const user = await decodeToken(token);
      (ctx.request as any).user = user;
      // const cacheToken = cache.get(`user-${uid}-token`);
      // if (!cacheToken) {
      //   ctx.throw(401, 'unauthorized');
      // }
    } catch (error) {
      ctx.throw(401, 'unauthorized');
    }
  } else {
    ctx.throw(401, 'unauthorized');
  }
  await next();
};

export default auth;
