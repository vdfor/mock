import { RouterContext } from 'koa-router';
import * as shortid from 'shortid';
import { IApi } from '../type';
import { validator } from '../../middleware';

const listApi: IApi[] = [
  {
    method: 'get',
    path: '/quark-mobile/list',
    policies: [validator({ query: ['pageNum', 'pageSize'] })],
    action: (ctx: RouterContext) => {
      const { pageNum, pageSize, empty } = ctx.query;
      if (empty) {
        ctx.body = [];
        return;
      }
      ctx.body = +pageNum > 5 ? [] : [...new Array(+pageSize)].map(() => ({
        id: shortid.generate(),
        num: Math.floor(Math.random() * 1000),
        title: 'Taro是什么',
        text: 'Taro - 多端统一开发解决方案，支持微信/支付宝/字节跳动/百度小程序、QQ轻应用、快应用、h5、RN，实现了一处代码、多处运行。',
        imgUrl: 'https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png',
        createAt: +new Date() - Math.floor(Math.random() * 100000),
      }));
    },
  },
];

export default listApi;
