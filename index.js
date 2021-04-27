const { dialog } = require('electron')
const path = require('path')
const url = require('url')
const {app, BrowserWindow} = require('electron')

let win

function createWindow() {
    win = new BrowserWindow(
        {
            width: 1280, 
            height: 800, 
            minWidth: 800,
            minHeight: 700,
            title: 'Расчет пропускной способности СПД',
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
            },
            icon: __dirname + '/img/icon.png'
        })
    win.setMenu(null)
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
    
    win.on('closed', () =>{
        win = null
    })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
    app.quit()
})
