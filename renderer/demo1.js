const { remote } = require('electron');
const { BrowserWindow } = remote;
const fs = require('fs'); 

let readCartoon = this.document.querySelector('#readCartoon')
let cartoonContent = this.document.querySelector('#cartoonContent')

let openNewWindow = this.document.querySelector('#openNewWindow')

let newWindow = null

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