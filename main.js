const electron = require('electron') //引入electron模块
const { app, BrowserWindow } = require('electron') //app：electron的引用，BrowserWindow：创建窗口的引用

let mainWindow = null //声明要打开的主窗口

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 400, 
        height: 400,
        webPreferences: { nodeIntegration: true }
    })

    mainWindow.loadFile('./demo1.html')

    //监听关闭事件，将主窗口设置为null
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})