function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.png'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
    } else if (hora >= 18 && hora < 23){
        img.src = 'noite.png'
    }   
}

