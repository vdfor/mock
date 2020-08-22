import { RouterContext } from 'koa-router';
import * as shortId from 'shortid';
import { IApi } from '../type';

const guideSwiperApi: IApi[] = [
  {
    method: 'get',
    path: '/quark-taro/swiper',
    action: async (ctx: RouterContext) => {
      const {
        delay,
      } = ctx.query;

      if (delay) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, delay);
        });
      }

      ctx.body = [
        {
          id: shortId.generate(),
          text: 'GITHUB',
          color: '#531dab',
          imageUrl: 'https://img13.360buyimg.com/ling/jfs/t1/139024/36/900/347788/5ee9cc27Effb0c16b/ce004d13e1a1479c.png',
          // link: 'https://github.com/arkrm/quark-taro',
        },
        {
          id: shortId.generate(),
          text: 'TALKS',
          color: '#2F54EB',
          imageUrl: 'https://img10.360buyimg.com/ling/jfs/t1/112290/35/2116/67015/5e9eee51E11ea7938/886d7ddc2e9e6026.png',
        },
        {
          id: shortId.generate(),
          text: 'ARTICLES',
          color: '#7CB305',
          imageUrl: 'https://img20.360buyimg.com/ling/jfs/t1/117964/14/2118/145903/5e9eee0aE8897b3dd/bd435e6161779ad1.png',
        },
        {
          id: shortId.generate(),
          text: 'HEROS',
          color: '#08979C',
          imageUrl: 'https://img30.360buyimg.com/ling/jfs/t1/71910/7/14212/335822/5dba8942E897651f1/3a9d17f7f54b635e.jpg',
        },
      ];
    },
  },
];

export default guideSwiperApi;
