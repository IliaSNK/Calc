let numOfSub = document.getElementById('number-of-sub')
let numOfSpeak = document.getElementById('number-of-speakers')
let VideoOption = document.getElementById('video-option')


let minCup = document.getElementById('min-capacity')
let recCup = document.getElementById('recomend-capacity')
let numOfstream = document.getElementById('num-of-stream')
let typestream = document.getElementById('type-stream') 

let streamTitle = document.getElementById('digital-stream-title')




let VKScalc = () => {
    let type = document.getElementById('speed-type').value
    let video = VideoOption.value.split(' ')
    let min = (parseInt(numOfSub.value) * video[0]) + (parseInt(numOfSpeak.value) * video[1]) 
    let rec = ((parseInt(numOfSub.value) * video[0]) + (parseInt(numOfSpeak.value) * video[1])) * 1.5 

    if (type == 'Мбит/с'){
        min /= 1024
        min = min.toFixed(2)
        rec /= 1024
        rec = rec.toFixed(2)
    }
    minCup.innerHTML = `${min} ${type}`
    recCup.innerHTML = `${rec} ${type}`

    // if (rec < 8448 ) {
    //     let numStr = Math.ceil(rec / 2048).toFixed(2)
    //     numOfstream.innerHTML = numStr
    //     if(numStr == 0) {streamTitle.innerHTML = 'цифровых потоков'}
    //     if(numStr == 1) {streamTitle.innerHTML = 'цифровой поток'}
    //     else{streamTitle.innerHTML = 'цифровых потока'}
    //     typestream.innerHTML = 'Е1'
    // } 
    // if (rec < 34368 ) {
    //     let numStr = Math.ceil(rec / 8448).toFixed(2)
    //     numOfstream.innerHTML = numStr
    //     if(numStr == 0) {streamTitle.innerHTML = 'цифровых потоков'}
    //     if(numStr == 1) {streamTitle.innerHTML = 'цифровой поток'}
    //     else{streamTitle.innerHTML = 'цифровых потока'}
    //     typestream.innerHTML = 'Е2'
    // } 
    // if (rec < 139264 ) {
    //     let numStr = Math.ceil(rec / 34368).toFixed(2)
    //     numOfstream.innerHTML = numStr
    //     if(numStr == 0) {streamTitle.innerHTML = 'цифровых потоков'}
    //     if(numStr == 1) {streamTitle.innerHTML = 'цифровой поток'}
    //     else{streamTitle.innerHTML = 'цифровых потока'}
    //     typestream.innerHTML = 'Е3'
    // } 
    // if (rec > 139264 ) {
    //     let numStr = Math.ceil(rec / 139264).toFixed(2)
    //     numOfstream.innerHTML = numStr
    //     if(numStr == 0) {streamTitle.innerHTML = 'цифровых потоков'}
    //     if(numStr == 1) {streamTitle.innerHTML = 'цифровой поток'}
    //     else{streamTitle.innerHTML = 'цифровых потока'}
    //     typestream.innerHTML = 'Е4'
    // }     
}


