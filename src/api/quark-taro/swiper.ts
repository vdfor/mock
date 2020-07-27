import { RouterContext } from 'koa-router';
import * as shortId from 'shortid';
import { IApi } from '../type';

const guideSwiperApi: IApi[] = [
  {
    method: 'get',
    path: '/quark-taro/swiper',
    action: (ctx: RouterContext) => {
      ctx.body = [
        {
          id: shortId.generate(),
          text: 'GITHUB',
          color: '#531dab',
          // link: 'https://github.com/arkrm/quark-taro',
        },
        {
          id: shortId.generate(),
          text: 'TALKS',
          color: '#2F54EB',
        },
        {
          id: shortId.generate(),
          text: 'ARTICLES',
          color: '#7CB305',
        },
        {
          id: shortId.generate(),
          text: 'HEROS',
          color: '#08979C',
        },
      ];
    },
  },
];

export default guideSwiperApi;
