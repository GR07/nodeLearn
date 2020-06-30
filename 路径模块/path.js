let path = require('path')

let strPath = 'https://www.cnblogs.com/dotey/p/13205902.html'
// extname 获取路径信息的 后缀名
let info = path.extname(strPath)
console.log(info) // .html


// resolve、join 帮你把字符串拼接成一个绝对路径
let arr = ['a', 'b', 'c', 'guor']

// 使用 resolve 拼接（从自动帮你从文件往上找一直到磁盘）
let info1 = path.resolve(...arr)
console.log(info1) // D:\project\nodeLearn\路径模块\a\b\c\guor

// 使用 join 拼接 （__dirname是当前文件所在的磁盘目录）
let info2 = path.join(...[__dirname, 'a', 'b', 'c', 'guor'])
console.log(info2) // D:\project\nodeLearn\路径模块\a\b\c\guor

// 获取当前文件的所在磁盘目录
console.log(__dirname) // D:\project\nodeLearn\路径模块

let os = require('os')

console.log(os.cpus()) // 查看cpu的信息
console.log(os.totalmem()) // 查看内存大小
console.log(os.arch()) // 查看系统架构 32 64
console.log(os.freemem()) // 查看剩余内存