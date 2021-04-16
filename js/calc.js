

// const VKScalc = () => {
//     let numOfSub = document.getElementById('number-of-sub')
//     let numOfSpeak = document.getElementById('number-of-speakers')
//     let VideoOption = document.getElementById('video-option')
//     let minCup = document.getElementById('min-capacity')
//     let recCup = document.getElementById('recomend-capacity')
//     let type = document.getElementById('speed-type').value
//     let video = VideoOption.value.split(' ')
//     let min = (parseInt(numOfSub.value) * video[0]) + (parseInt(numOfSpeak.value) * video[1]) 
//     let rec = ((parseInt(numOfSub.value) * video[0]) + (parseInt(numOfSpeak.value) * video[1])) * 1.5 

//     if (type == 'Мбит/с'){
//         min /= 1024
//         min = min.toFixed(2)
//         rec /= 1024
//         rec = rec.toFixed(2)
//     }
//     minCup.innerHTML = `${min} ${type}`
//     recCup.innerHTML = `${rec} ${type}`
// }

const VKScalc = () => {
    let sub = document.getElementById('subVKS').value
    sub = parseInt(sub)
    let spk = document.getElementById('speakVKS').value
    spk = parseInt(spk)
    let options =  document.getElementById('optionVKS').value.split(' ')
    let speedSub = options[0]
    let speedSpk = options[1]
    speedSub = parseInt(speedSub)
    speedSpk = parseInt(speedSpk)
    let min = (sub * speedSub) + (spk * speedSpk)
    let rec = ((sub * speedSub) + (spk * speedSpk)) * 1.5 

    let typeOfSpeedATSR = document.getElementById('typeOfSpeedVKS').value    
    if (typeOfSpeedATSR === 'Мбит/с'){
        min /= 1024
        rec /= 1024
    }

    document.getElementById('minVKS').textContent = min.toFixed(2)
    document.getElementById('recVKS').textContent = rec.toFixed(2)
    document.getElementById('minVKStype').textContent = typeOfSpeedATSR
    document.getElementById('recVKStype').textContent = typeOfSpeedATSR
}

const ATSRcalc = () => {
    let sub = document.getElementById('subATSR').value
    sub = parseInt(sub)
    let speed = document.getElementById('standartATSR').value
    speed = parseInt(speed)
    let min = (sub / 3.5) * 1.5 * speed
    let rec = (sub / 2) * 1.5 * speed

    let typeOfSpeedATSR = document.getElementById('typeOfSpeedATSR').value    
    if (typeOfSpeedATSR === 'Мбит/с'){
        min /= 1024
        rec /= 1024
    }

    document.getElementById('minATSR').textContent = min.toFixed(2)
    document.getElementById('recATSR').textContent = rec.toFixed(2)
    document.getElementById('minATSRtype').textContent = typeOfSpeedATSR
    document.getElementById('recATSRtype').textContent = typeOfSpeedATSR
}

const ZSPDcalc = () => {
    let sub = document.getElementById('subZSPD').value
    sub = parseInt(sub)
    let category =  document.getElementById('categoryZSPD').value.split(' ')
    let speed = category[0]
    let time = category[1]
    speed = parseInt(speed)
    time = parseInt(time)
    let min = (speed * (sub / 3.5)) / time
    let rec = (speed * (sub / 2)) / time

    let typeOfSpeedATSR = document.getElementById('typeOfSpeedZSPD').value    
    if (typeOfSpeedATSR === 'Мбит/с'){
        min /= 1024
        rec /= 1024
    }

    document.getElementById('minZSPD').textContent = min.toFixed(2)
    document.getElementById('recZSPD').textContent = rec.toFixed(2)
    document.getElementById('minZSPDtype').textContent = typeOfSpeedATSR
    document.getElementById('recZSPDtype').textContent = typeOfSpeedATSR
}


