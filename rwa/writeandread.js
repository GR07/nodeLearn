let fs = require('fs');

let { fnWrite, fnRead } = require('./func')

// 读取文件目录下的所有文件内容，然后全部写入一个新的文件里

const path = 'all.txt'
fs.readdir('./js', (err, files) => {
    if (err) {
        return console.log('读取目录失败')
    } else {
        files.forEach(async (file) => {
            let content = await fnRead(`./js/${file}`)
            await fnWrite(path, content)
        })
    }
})