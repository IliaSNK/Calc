// Функция переключения вкладок "АТС-Р", "ЗВКС" и "ЗС СПД"
const showWrap = id => {
    switch (id) {
        case "VKS":
            document.getElementById("VKS").classList.remove('hideWrap')
            document.getElementById("ATSR").classList.add('hideWrap')
            document.getElementById("ZSPD").classList.add('hideWrap') 
            document.getElementById("btnVKS").classList.add('options-title-active') 
            document.getElementById("btnATSR").classList.remove('options-title-active') 
            document.getElementById("btnZSPD").classList.remove('options-title-active') 
            break;
        case "ATSR":
            document.getElementById("VKS").classList.add('hideWrap')
            document.getElementById("ATSR").classList.remove('hideWrap')
            document.getElementById("ZSPD").classList.add('hideWrap') 
            document.getElementById("btnVKS").classList.remove('options-title-active') 
            document.getElementById("btnATSR").classList.add('options-title-active') 
            document.getElementById("btnZSPD").classList.remove('options-title-active') 
            break;
        case "ZSPD":
            document.getElementById("VKS").classList.add('hideWrap')
            document.getElementById("ATSR").classList.add('hideWrap')
            document.getElementById("ZSPD").classList.remove('hideWrap') 
            document.getElementById("btnVKS").classList.remove('options-title-active') 
            document.getElementById("btnATSR").classList.remove('options-title-active') 
            document.getElementById("btnZSPD").classList.add('options-title-active') 
            break;
        default:
            break;
    }
}