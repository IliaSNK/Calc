const remote = require('electron').remote
const fs = require('fs')


function Editor () {
    this.fsave = false
    this.exten = 'txt'
    this.fname = 'new'
    this.fpath = null
    this.memo = 'Hello world'
}

Editor.prototype.new = function(){
    if(!this.fsave){
        remote.dialog.showMessageBox({
            type: 'question',
            title: 'Test',
            buttons: ['Save', 'notSave', 'Cancel'],
            message: 'Test message'
        }).then(result => {
            if(result.response == 0) {
                let file = remote.dialog.showSaveDialogSync({
                    title: 'Save',
                    filters: [{name: 'TestFile', extension: this.exten}],
                    message: 'Save',
                    defaultPath: this.fpath
                })
                if (file){
                    let arrPath = file.split('\\')
                    this.fname = arrPath[arrPath.length - 1].replace('.txt', '')
                    this.fpath = arrPath.join('\\').replace(this.fname + '.txt', '')

                    fs.writeFileSync(file, this.memo, {flag: 'a'})
                    this.fname = 'new'
                    this.memo = ''
                        
                }
            }
        })
    }
}

export const Save = () => {
    let fsave = false
    let exten = 'txt'
    let fname = 'new'
    let fpath = null
    let memo = 'Hello world'
    remote.dialog.showMessageBox({
        type: 'question',
        title: 'Test',
        buttons: ['Save', 'notSave', 'Cancel'],
        message: 'Test message'
    }).then(result => {
        if(result.response == 0) {
            let file = remote.dialog.showSaveDialogSync({
                title: 'Save',
                filters: [{name: 'TestFile', extension: exten}],
                message: 'Save',
                defaultPath: fpath
            })
            if (file){
                let arrPath = file.split('\\')
                fname = arrPath[arrPath.length - 1].replace('.txt', '')
                fpath = arrPath.join('\\').replace(fname + '.txt', '')

                fs.writeFileSync(file, memo, {flag: 'a'})
                fname = 'new'
                memo = ''
                    
            }
        }
    })
}

// document.addEventListener('DOMContentLoaded', () => {
//     let editor = new Editor()
//     console.log('Test')
//     alert(123)
//     let saveBtn = document.getElementById('SaveBtn')
//     saveBtn.addEventListener('click', () => {
//         editor.new()
//     })
// })