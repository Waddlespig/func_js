// 1 引入http模块
const http = require('http');
const url = require('url');

const router = require('./router.js');
// 2. 用http模块创建服务
/*
req 获取url信息（request）
res 浏览器返回响应信息（response）
 */
http.createServer(function (req, res) {
  // 发送 http 头部；
  // HTTP 状态码200：ok
  //设置http响应头,状态码:200，文件类型:html,字符集:utf8
  /*响应状态码和响应头*/
  if (req.url === '/favicon.ico') return;
  res.writeHead(200,{"Content-Type":"application/json; charset=utf-8"});
  let req_url = url.parse(req.url);
  let res_write = '';

  if (req_url.pathname === '/a') {
    res_write = JSON.stringify(req_url);
  }

   /*响应数据*/
  res.write(res_write);
   /*结束响应*/
  res.end();
  /*监听端口：8001*/
}).listen(9000, '127.0.0.1');

console.log('server start')
