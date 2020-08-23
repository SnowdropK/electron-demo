const { remote } = require('electron');
const { BrowserWindow, Menu } = remote;
const fs = require('fs'); 

let readCartoon = this.document.querySelector('#readCartoon')
let cartoonContent = this.document.querySelector('#cartoonContent')

let openNewWindow = this.document.querySelector('#openNewWindow')

let newWindow = null

let template = [
    {label: '复制'},
    {label: '粘贴'}
]

let menu = Menu.buildFromTemplate(template)

window.addEventListener('contextmenu', (e) => {
        //阻止当前窗口默认事件
        e.preventDefault()
        //把菜单模板添加到右键菜单
        menu.popup({
            window: remote.getCurrentWindow()
        })
})


readCartoon.onclick = () => {
    fs.readFile('txt/cartoon.txt', (err, data) => {
        cartoonContent.innerHTML = data
    })
}

openNewWindow.onclick = () => {
    newWindow = new BrowserWindow({
        width: 400,
        height: 400
    })

    newWindow.loadFile('newWindow.html')

    newWindow.on('closed', () => {
        newWindow = null
    })
}