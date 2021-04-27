// Функция для расчета пропускной способности ЗВКС
const VKScalc = () => {
    let sub = document.getElementById('subVKS').value // Получаем количество аббонентов из формы
    sub = parseInt(sub) // Преобразуем строку в число
    let spk = document.getElementById('speakVKS').value // Получаем количество докладчиков из формы
    spk = parseInt(spk) // Преобразуем строку в число

    // Получаем из формы необходимые данные о выбранном разрешении
    let options =  document.getElementById('optionVKS').value.split(' ') 
    let speedSub = options[0]
    let speedSpk = options[1]

    speedSub = parseInt(speedSub) // Преобразуем строку в число
    speedSpk = parseInt(speedSpk) // Преобразуем строку в число
    let min = (sub * speedSub) + (spk * speedSpk) // Расчитываем минимальную пропускную способность
    let rec = ((sub * speedSub) + (spk * speedSpk)) * 1.5 // Расчитываем рекомендуемую пропускную способность

    let typeOfSpeedATSR = document.getElementById('typeOfSpeedVKS').value //Проверяем в каких единицах должен быть ответ
    if (typeOfSpeedATSR === 'Мбит/с'){ //Если выбраны Мбит/с то пересчитываем минимальную и рекомендуемую пропускную способность
        min /= 1024 
        rec /= 1024
    }

    // Обновляем данные ответа в форме
    document.getElementById('minVKS').textContent = min.toFixed(2) 
    document.getElementById('recVKS').textContent = rec.toFixed(2)
    document.getElementById('minVKStype').textContent = typeOfSpeedATSR
    document.getElementById('recVKStype').textContent = typeOfSpeedATSR
}

// Функция для расчета пропускной способности АТС-Р
const ATSRcalc = () => {
    let sub = document.getElementById('subATSR').value // Получаем количество аббонентов из формы
    sub = parseInt(sub) // Преобразуем строку в число
    let speed = document.getElementById('standartATSR').value // Получаем из формы необходимые данные о выбранном стандарте
    speed = parseInt(speed) // Преобразуем строку в число
    let min = (sub / 3.5) * 1.5 * speed // Расчитываем минимальную пропускную способность
    let rec = (sub / 2) * 1.5 * speed // Расчитываем рекомендуемую пропускную способность

    let typeOfSpeedATSR = document.getElementById('typeOfSpeedATSR').value //Проверяем в каких единицах должен быть ответ    
    if (typeOfSpeedATSR === 'Мбит/с'){  //Если выбраны Мбит/с то пересчитываем минимальную и рекомендуемую пропускную способность
        min /= 1024
        rec /= 1024
    }

    // Обновляем данные ответа в форме
    document.getElementById('minATSR').textContent = min.toFixed(2)
    document.getElementById('recATSR').textContent = rec.toFixed(2)
    document.getElementById('minATSRtype').textContent = typeOfSpeedATSR
    document.getElementById('recATSRtype').textContent = typeOfSpeedATSR
}

const ZSPDcalc = () => {
    let sub = document.getElementById('subZSPD').value // Получаем количество аббонентов из формы
    sub = parseInt(sub) // Преобразуем строку в число

    // Получаем из формы необходимые данные о выбранной категории срочности
    let category =  document.getElementById('categoryZSPD').value.split(' ') 
    let speed = category[0]
    let time = category[1]
    
    speed = parseInt(speed) // Преобразуем строку в число
    time = parseInt(time) // Преобразуем строку в число
    let min = (((speed * 8) / time) * sub * 1.5) / 1024 // Расчитываем минимальную пропускную способность 
    let rec = (((speed * 8) / time) * sub * 2) / 1024 // Расчитываем рекомендуемую пропускную способность

    let typeOfSpeedATSR = document.getElementById('typeOfSpeedZSPD').value //Проверяем в каких единицах должен быть ответ   
    if (typeOfSpeedATSR === 'Мбит/с'){  //Если выбраны Мбит/с то пересчитываем минимальную и рекомендуемую пропускную способность
        min /= 1024
        rec /= 1024
    }

    // Обновляем данные ответа в форме
    document.getElementById('minZSPD').textContent = min.toFixed(2)
    document.getElementById('recZSPD').textContent = rec.toFixed(2)
    document.getElementById('minZSPDtype').textContent = typeOfSpeedATSR
    document.getElementById('recZSPDtype').textContent = typeOfSpeedATSR
}


