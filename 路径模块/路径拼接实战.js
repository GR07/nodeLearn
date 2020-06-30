// __dirname 实战：
// 获取当前文件的所在磁盘目录

// 思路：
// 1.先得到一个客户端请求的地址。
// 2.使用字符串方法解析到静态页在服务器路径
// 3.我们用这个路径 使用readFile去读取静态页内容

let fs = require('fs')
let path = require('path')
let str = 'https://www.cnblogs.com/node/guor.html'
let arr = str.split('/') // [ 'https:', '', 'www.cnblogs.com', 'node', 'guor.html' ]
arr = arr.slice(arr.length-2) // [ 'node', 'guor.html' ]

// 得到绝对路径 
let filePath = path.join(__dirname, ...arr) // D:\project\nodeLearn\路径模块\node\guor.html
console.log(filePath)
fs.readFile(filePath, { flags: 'r', encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

