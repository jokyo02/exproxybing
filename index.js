// 引入express模块
const express = require('express');
// 创建一个express应用
const app = express();
// 定义反向代理的目标网站
const target = 'https://bing.cf03-b29.workers.dev';
// 使用express-http-proxy中间件实现反向代理
const proxy = require('express-http-proxy');
// 将所有请求转发到目标网站
app.use('/', proxy(target));
// 监听3000端口
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
