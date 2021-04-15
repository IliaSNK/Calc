const remote = require('electron').remote
const fs = require('fs')

const save = () => {  
    let fName = new Date().toLocaleString()
    fName = fName.split(', ')
    fName[0] = fName[0].replaceAll('.', '_')
    let vks = `
____________________${fName[1]}____________________

                      ВКС

Количество абонентов:${document.getElementById('number-of-sub').value}
Качество видеосвязи: ${document.getElementById('video-option').options[document.getElementById('video-option').selectedIndex].text}
Количество докладчиков: ${document.getElementById('number-of-speakers').value}

Минимальная пропускная способность: ${document.getElementById('min-capacity').textContent}
Рекомендуемая пропускная способность: ${document.getElementById('recomend-capacity').textContent}

________________________________________________
`
    let file = remote.dialog.showSaveDialogSync({
            title: 'Save',
            filters: [{name: 'TestFile', extension: '.txt'}],
            message: 'MessageTest',
            defaultPath: fName[0] + '.txt'
        })
        if (file){
                fs.writeFileSync(file , vks, {flag: 'a'})
        }
}
                        
                    
                   
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('SaveBtn').addEventListener('click', () => save())
})