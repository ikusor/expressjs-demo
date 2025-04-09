//1. 导入 express
const express = require('express');
// 导入CORS中间件，用于处理跨域请求
const cors = require('cors');
//2. 创建应用对象
const app = express();
// 使用CORS中间件，允许跨域请求
app.use(cors());
//3. 创建路由规则
app.get('/home', (req, res) => {
    // res.json({ message: 'Hello, Express Server!' });
    res.send('<h1>Hello, Express Server!</h1>');
// res.end('hello express server');
});
//4. 监听端口 启动服务
app.listen(3000, () =>{
console.log('服务已经启动, 端口监听为 3000...');
});
    // fetch("http://127.0.0.1:3000/home").then(res => {
    //   console.log("res:",res)//获取到一个流
    //   // 获得具体的data  响应数据类型是json就json(),是text就text()
    //   const response = res
    //   response.json().then(res => {
    //     console.log("res:",res)
    //   })


    // }).catch(err => {
    //   console.log("err:",err)
    // })