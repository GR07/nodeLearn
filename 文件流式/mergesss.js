let fs = require('fs')

// 创建读取流
let guor = fs.createReadStream('IMG_0023.JPG', { flags: 'r' })

// 创建写入流
let guorWrite = fs.createWriteStream('qqq.JPG', { flags: 'w' })


// 流式读取数据 + 流式写入 的例子是为了理解实现过程：
// 其实只需要一个管道插入 api 即可：
guor.pipe(guorWrite)