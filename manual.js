const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow
const path = require('path')
const url = require('url')

let win
const openManual = () => {
    win = new BrowserWindow(
        {
            width: 800, 
            height: 600, 
            title: 'Справка',
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
            },
            icon: __dirname + '/img/logo.png'
        })
    win.setMenu(null)
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'manual.html'),
        protocol: 'file',
        slashes: true
    }))
    win.on('closed', () =>{
        win = null
    })
}