let fs = require('fs')

let events = require('events')

// 创建实例化 EventEmitter 对象
let eventsEmitter = new events.EventEmitter()


// 开始读取文件
fs.readFile('hello.txt', { flags: 'r', encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        // 读取成功后触发
        eventsEmitter.emit('helloSuccess', data) // 3个
    }
})

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