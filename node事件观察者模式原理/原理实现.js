let fs = require('fs')

// 开始读取文件
fs.readFile('hello.txt', { flags: 'r', encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        // 读取成功后触发5个回调 看下面的 guorEvent 对象封装
        guorEvent.emit('helloSuccess', data) // 3个
        guorEvent.emit('hello', data) // 2个
    }
})

let guorEvent = {
    event: {
        // helloSuccess: [fn, fn, fn]
    },
    on: function (eventName, fn) {
        if (this.event[eventName]) {
            this.event[eventName].push(fn)
        } else {
            this.event[eventName] = []
            this.event[eventName].push(fn)
        }
    },
    emit: function (eventName, data) {
        if (this.event[eventName]) {
            this.event[eventName].forEach((itemFn) => {
                itemFn(data)
            })
        }
    }
}

// 执行顺序按照事件队列添加的顺序

guorEvent.on('helloSuccess', (data) => {
    console.log(`成功后第一件事情`)
})
guorEvent.on('helloSuccess', (data) => {
    console.log(`成功后第二件事情`)
})
guorEvent.on('helloSuccess', (data) => {
    console.log(`成功后第三件事情`)
})

guorEvent.on('hello', (data) => {
    console.log(`hello1111件事情`)
})

guorEvent.on('hello', (data) => {
    console.log(`hello2222件事情`)
})