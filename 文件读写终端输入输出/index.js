let fs = require('fs');

let readline = require('readline');

let { fnWrite, fnRead } = require('./func')

// 接收一个配置对象
let guor = readline.createInterface({
    input: process.stdin, // 输入-----对应终端
    output: process.stdout // 输出----对应终端
})

function guorQuestion(text) {
    return new Promise((resolve, reject) => {
        guor.question(text, (answer) => {
            resolve(answer)
        })
    })
}

async function createPackage() {
    let a = await guorQuestion('公司名称？：')
    let b = await guorQuestion('部门名称？：')
    let c = await guorQuestion('职位？：')
    let d = await guorQuestion('姓名？：')
    let content = `
        {
            "author": "guor",
            "version": "1.0",
            "gs": "${a}",
            "bm": "${b}",
            "zw": "${c}",
            "xm": "${d}",
            "desc": "package.json"
        }
    `
    await fnWrite('package.json', content)
    // 写完后关闭终端进程
    guor.close()
}

createPackage()

// 监听close事件，回调退出终端
guor.on('close', () => {
    process.exit(0)
})