// Подключаем необходимые библиотеки для работы с файловой системой и библиотекой  Electron
const remote = require('electron').remote
const fs = require('fs')

// Функция для сохранения лог-файла
const save = () => {  
    // Из текущей даты и времени формируем имя файла
    let fName = new Date().toLocaleString()
    fName = fName.split(', ')
    fName[0] = fName[0].replaceAll('.', '_')
    
    //Шаблон для лог-файла
    let vks = `
Отчет от ${fName[0].replaceAll('_', '.')} в ${fName[1]}

_____________________АТС-Р________________________

Количество абонентов:${document.getElementById('subATSR').value}
Для стандарта: ${document.getElementById('standartATSR').options[document.getElementById('standartATSR').selectedIndex].text}

Минимальная пропускная способность: ${document.getElementById('minATSR').textContent} ${document.getElementById('minATSRtype').textContent}
Рекомендуемая пропускная способность: ${document.getElementById('recATSR').textContent} ${document.getElementById('recATSRtype').textContent}

______________________ЗВКС________________________

Количество абонентов:${document.getElementById('subVKS').value}
Качество видеосвязи: ${document.getElementById('optionVKS').options[document.getElementById('optionVKS').selectedIndex].text}
Количество докладчиков: ${document.getElementById('speakVKS').value}

Минимальная пропускная способность: ${document.getElementById('minVKS').textContent} ${document.getElementById('minVKStype').textContent}
Рекомендуемая пропускная способность: ${document.getElementById('recVKS').textContent} ${document.getElementById('recVKStype').textContent}

_____________________ЗС СПД_______________________

Количество абонентов:${document.getElementById('subZSPD').value}
Для стандарта: ${document.getElementById('categoryZSPD').options[document.getElementById('categoryZSPD').selectedIndex].text}

Минимальная пропускная способность: ${document.getElementById('minZSPD').textContent} ${document.getElementById('minZSPDtype').textContent}
Рекомендуемая пропускная способность: ${document.getElementById('recZSPD').textContent} ${document.getElementById('recZSPDtype').textContent}

__________________________________________________
`
    // Открываем диалоговое окно для выбора места сохранения лог-файла
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
                        
                    
// Добавляем прослушивание события нажатия на кнопу "Сохранить"                 
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('SaveBtn').addEventListener('click', () => save())
})