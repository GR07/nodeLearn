let fs = require('fs')

// 创建读取流
// let guor = fs.createReadStream('hello.txt', { flags: 'r', encoding: 'utf-8' })
let guor = fs.createReadStream('IMG_0023.JPG', { flags: 'r' })
// console.log(guor)

// 触发文件打开的事件open
guor.on('open', () => {
    console.log('open------文件打开')
})

// 文件读取完成触发事件close 事件
guor.on('close', () => {
    console.log('close------文件读取完成关闭')
})

// 单批数据读取
guor.on('data', (chunk) => {
    console.log("单批数据读取")
    console.log(`单次读取的文件大小：`, chunk.length) // 每次输出 65536 （单次读取的最大字节）
})
