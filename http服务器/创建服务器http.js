let http = require('http')
// 创建一个server服务器实例
let server = http.createServer()

// 监听每一个请求
server.on('request', (req, res) => {
    console.log(req.url)
    console.log(req.headers)
    res.setHeader(`Content-Type`, `text/html; charset=UTF-8`)
    // 必须返回响应res.end不然浏览器一直处于等待响应状态
    // 可以根据路径去判断返回内容
    if (req.url === `/`) {
        res.end(`<h1>首页</h1><img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png">`)
    } else if (req.url === `/about`) {
        res.end(`<h1>介绍</h1>`)
    } else {
        res.end(`<h1>404找不到噢</h1>`)
    }
})

server.listen(8181, () => {
    console.log(`服务器开启成功~~~`)
})