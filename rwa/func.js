// 写入文件
let fs = require('fs')
function fnWrite(path, text) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, text, { flag: 'a', encoding: 'utf-8' }, (err) => {
            if (err) {
                reject("write函数--写入内容失败")
            } else {
                resolve("写入内容成功")
            }
        })
    })
}
// 读取文件内容
function fnRead(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                // 返回读取到的内容
                resolve(data)
            }
        })
    })
}

module.exports = { fnWrite, fnRead }