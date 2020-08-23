const { remote, shell, clipboard } = require('electron');
const { BrowserWindow, Menu, dialog } = remote;
const fs = require('fs'); 

let readCartoon = this.document.querySelector('#readCartoon')
let cartoonContent = this.document.querySelector('#cartoonContent')

let openNewWindow = this.document.querySelector('#openNewWindow')

let aHref = document.querySelector('#aHref')

let choosePictrue = document.querySelector('#choosePictrue')
let imgContent = document.querySelector('#imgContent')

let saveFile = document.querySelector('#saveFile')

let messageBtn = document.querySelector('#messageBtn')

let copy = document.querySelector('#copy')
let code = document.querySelector('#code')

let newWindow = null

let template = [
    {label: '复制'},
    {label: '粘贴'}
]

let menu = Menu.buildFromTemplate(template)

// 右键添加菜单
window.addEventListener('contextmenu', (e) => {
        //阻止当前窗口默认事件
        e.preventDefault()
        //把菜单模板添加到右键菜单
        menu.popup({
            window: remote.getCurrentWindow()
        })
})

// 读取文件
readCartoon.onclick = () => {
    fs.readFile('txt/cartoon.txt', (err, data) => {
        cartoonContent.innerHTML = data
    })
}

/**
 * 打开新窗口
 */
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

/**
 * 在浏览器打开链接
 * @param {*} e 
 */
aHref.onclick = function(e) {
    e.preventDefault()
    let href = this.getAttribute('href')
    shell.openExternal(href)
}

/**
 * 选择、显示图片
 */
choosePictrue.onclick = () => {
    dialog.showOpenDialog({
        title:'请选择库洛牌图片',
        defaultPath:'img/',
        filters:[{name:'png',extensions:['png']}]
    }).then(result => {
        imgContent.setAttribute("src", result.filePaths[0]);
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
}

/**
 * 保存文件
 */
saveFile.onclick = () => {
    dialog.showSaveDialog({
        title:'保存文件',
    }).then(result=>{
        console.log(result.filePath)
        fs.writeFileSync(result.filePath, '宇智波胖虎奋斗中')
    }).catch(err=>{
        console.log(err)
    })
}

/**
 * 显示对话框
 */
messageBtn.onclick = function(){
    dialog.showMessageBox({
        type:'warning',
        title:'看什么动画',
        message:'看火影、死神还是海贼？',
        buttons:['火影','死神', '海贼']
    }).then(result=>{
        console.log(result)
    })
}

/**
 * 复制
 */
copy.onclick = function(){
    clipboard.writeText(code.innerHTML)
    alert('复制成功')
}