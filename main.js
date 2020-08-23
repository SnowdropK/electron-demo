const electron = require('electron') //引入electron模块
const { app, BrowserWindow, BrowserView, globalShortcut } = require('electron') //app：electron的引用，BrowserWindow：创建窗口的引用

let mainWindow = null //声明要打开的主窗口

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200, 
        height: 800,
        webPreferences: { nodeIntegration: true }
    })
    mainWindow.webContents.openDevTools()
    require('./main/menu.js') 

    mainWindow.loadFile('./mainDemo.html')

    //自动加载网页
    // let viewContent = new BrowserView()   //new出对象
    // mainWindow.setBrowserView(viewContent)   // 在主窗口中设置viewContent可用
    // viewContent.setBounds({x:0, y:100, width: 600, height: 600})  //定义viewContent的具体样式和位置
    // viewContent.webContents.loadURL('https://www.baidu.com/')  //viewContent载入的页面

    /**
     * 注册全局快捷键
     */
    globalShortcut.register('ctrl+h',()=>{
        mainWindow.loadURL('https://cn.vuejs.org/v2/guide/installation.html')  
    })

    //监听关闭事件，将主窗口设置为null
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})

app.on('will-quit',function(){
    //注销全局快捷键的监听
    globalShortcut.unregister('ctrl+h')
    globalShortcut.unregisterAll()
})