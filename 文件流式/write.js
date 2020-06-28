let fs = require('fs')

// 创建写入流
let guor = fs.createWriteStream('hello.txt', { flags: 'w', encoding: 'utf-8' })
console.log(guor)

// 触发文件打开的事件open
guor.on('open', () => {
    console.log('open------文件打开')
})

// 触发文件已准备好写入状态事件ready
guor.on('ready', () => {
    console.log('ready-----已准备好写入状态')
})

// write 文件流式写入
guor.write('我是写入的内容---1', (err) => {
    if (err) {
        console.log("写入内容失败")
    } else {
        console.log("写入内容成功---1")
    }
})
guor.write('我是写入的内容---2', (err) => {
    if (err) {
        console.log("写入内容失败")
    } else {
        console.log("写入内容成功---1")
    }
})

// 文件写入完成触发事件close 事件
guor.on('close', () => {
    console.log('close------文件写入完成关闭')
})

// end 必须放在最后面
guor.end(() => {
    console.log(`end------文件写入完成`)
})
