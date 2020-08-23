const { Menu, BrowserWindow } = require('electron')

let template = [
    {
        label: '火影忍者',
        submenu: [
            {
                label: '漩涡鸣人',
                accelerator: `ctrl+n`,
                click: () => {
                    let window = new BrowserWindow({
                        width: 400, 
                        height: 400
                    })
                    window.loadFile('newWindow.html')
                    window.on('closed', () => {
                        window = null
                    })
                }
            },
            {label: '宇智波佐助'}
        ]
    },
    {
        label: '死神',
        submenu: [
            {label: '黑崎一护'},
            {label: '石田雨龙'}
        ]
    },
    {
        label: '海贼王',
        submenu: [
            {label: '路飞'},
            {label: '乔巴'}
        ]
    }
]

let menu = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(menu)