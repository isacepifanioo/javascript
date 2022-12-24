function tempo() {
    var data = new Date()
    var hora = data.getHours()
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    msg.innerHTML = `são exatamente ${hora}`
    

    if (hora > 0 && hora <= 12) {

        img.src = "imagens/dia.png"
    } else if (hora >= 13 && hora <= 18) {
        img.src =  "imagens/tarde.png"
    } else {

    }
    
}

