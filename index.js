// import {Save} from './editor'
// const remote = require('electron').remote
// const fs = require('fs')
const { dialog } = require('electron')
const path = require('path')
const url = require('url')
const {app, BrowserWindow} = require('electron')

// console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))


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

    //  Убрать при релизе
    //  win.webContents.openDevTools()
    win.on('closed', () =>{
        win = null
    })
}

// const openFAQ = () => {
//     win = new BrowserWindow(
//         {
//             width: 800, 
//             height: 600, 
//             title: 'Справка',
//             webPreferences: {
//                 nodeIntegration: true,
//                 contextIsolation: false,
//                 enableRemoteModule: true,
//             },
//             icon: __dirname + '/img/logo.png'
//         })
//     win.setMenu(null)
//     win.loadURL(url.format({
//         pathname: path.join(__dirname, 'FAQ.html'),
//         protocol: 'file',
//         slashes: true
//     }))
//     win.on('closed', () =>{
//         win = null
//     })
// }

app.on('ready', createWindow)
app.on('window-all-closed', () => {
    app.quit()
})


// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Test')
//     let FAQ = document.getElementById('FAQ').addEventListener('click', () => {
//         openFAQ()
//     })
// })