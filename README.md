# @vdfor/mock

> mock for project, powered by [koa-sail-ts](https://github.com/vdfor/koa-sail-ts)

## docker build

```bash
# this is an example
#!/bin/bash
echo 'start...'
docker stop mock
docker rm mock
docker rmi mock:0.1.0
docker build -t mock:0.1.0 .
docker run --name mock -p 10010:8181 -v /home/docker/mock/logs:/usr/src/app/logs -d mock:0.1.0
echo 'finished'
exit 0
```

## 服务项目

/quark-mobile - [@vdfor/quark-taro](https://github.com/vdfor/quark-taro)

## rest-api

### /quark-mobile/list

#### method

GET

#### 入参 

| 参数 | 类型 | 是否必须 | 说明 |
| --- | --- | --- | --- |
| pageNum | number | 是 | 当前页 |
| pageSize | number | 是 | 每页条数 | 
| status | string | 否 | empty - 返回空数组; error - 返回错误 |

#### 返回值

```ts
interface IDataItem {
  id: string;
  num: number;
  title: string;
  text: string;
  createAt: number;
}

type IData = IDataItem[];
```



