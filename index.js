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
            width: 800, 
            height: 600, 
            title: 'Расчет пропускной способности СПД',
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
            },
            icon: __dirname + '/img/logo.png'
        })
    win.setMenu(null)
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    //  Убрать при релизе
     win.webContents.openDevTools()
    win.on('closed', () =>{
        win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    app.quit()
})

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Test')
//     alert(123)
//     let saveBtn = document.getElementById('SaveBtn')
//     saveBtn.addEventListener('click', () => {
//         Save()
//     })
// })

// const Save = () => {
//     let fsave = false
//     let exten = 'txt'
//     let fname = 'new'
//     let fpath = null
//     let memo = 'Hello world'
//     remote.dialog.showMessageBox({
//         type: 'question',
//         title: 'Test',
//         buttons: ['Save', 'notSave', 'Cancel'],
//         message: 'Test message'
//     }).then(result => {
//         if(result.response == 0) {
//             let file = remote.dialog.showSaveDialogSync({
//                 title: 'Save',
//                 filters: [{name: 'TestFile', extension: exten}],
//                 message: 'Save',
//                 defaultPath: fpath
//             })
//             if (file){
//                 let arrPath = file.split('\\')
//                 fname = arrPath[arrPath.length - 1].replace('.txt', '')
//                 fpath = arrPath.join('\\').replace(fname + '.txt', '')

//                 fs.writeFileSync(file, memo, {flag: 'a'})
//                 fname = 'new'
//                 memo = ''
                    
//             }
//         }
//     })
// }