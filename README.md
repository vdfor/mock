# @vdfor/mock

mock for project

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

## rest-api

### /quark-mobile/list

#### method

GET

#### 入参 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pageNum | 当前页 | number | -- |
| pageSize | 每页条数 | number | -- |

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



