function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('fundo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'dia.png'
        fundo.style.backgroundColor = 'rgb(58, 58, 158)' // azul
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        fundo.style.backgroundColor = 'rgb(182, 182, 29)' //amarelo
    } else if (hora >= 18 && hora < 23){
        img.src = 'noite.png'
        fundo.style.backgroundColor = 'rgb(56, 55, 55)' //preto
    }   
}

