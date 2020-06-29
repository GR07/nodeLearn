let fs = require('fs')

let events = require('events')

// 创建实例化 EventEmitter 对象
let eventsEmitter = new events.EventEmitter()


function guorPromise(path) {
    return new Promise((resolve, reject) => {
        // 开始读取文件
        fs.readFile(path, { flags: 'r', encoding: 'utf-8' }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

async function guorAsync() {
    let res = await guorPromise('hello.txt')
    eventsEmitter.emit('helloSuccess', res)
}
guorAsync()
// 执行顺序按照事件队列添加的顺序

eventsEmitter.on('helloSuccess', (data) => {
    console.log(`成功后第一件事情`)
})
eventsEmitter.on('helloSuccess', (data) => {
    console.log(`成功后第二件事情`)
})
eventsEmitter.on('helloSuccess', (data) => {
    console.log(`成功后第三件事情`)
})