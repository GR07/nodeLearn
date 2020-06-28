let fs = require('fs')

// 创建读取流
let guor = fs.createReadStream('IMG_0023.JPG', { flags: 'r' })

// 创建写入流
let guorWrite = fs.createWriteStream('abc.JPG', { flags: 'w' })

// 触发文件打开的事件open
guor.on('open', () => {
    console.log('open------文件打开')
})

// 文件读取完成触发事件close 事件
guor.on('close', () => {
    console.log('close------文件读取完成关闭')
    guorWrite.end(() => {
        console.log(`end------文件写入完成`)
    })
})

// 单批数据读取
guor.on('data', (chunk) => {
    console.log("单批数据读取")
    console.log(`单次读取的文件大小：`, chunk.length) // 每次输出 65536 （单次读取的最大字节）
    guorWrite.write(chunk, () => {
        console.log(`单批数据写入完毕`)
    })
})

