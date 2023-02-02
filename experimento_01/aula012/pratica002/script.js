function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var nasc = window.document.getElementById('idade')
    var res = window.document.getElementById('res')

    if (nasc.value == 0 || nasc.value > ano ) {
        alert('[ERRO] você colocou um ano invalido. Tente Novamente')
    } else {
        var fsex = window.document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5) {
                //bebe
                img.setAttribute('src', 'mulher/fcrianca.png')
            } else if(idade >= 6 && idade <= 14) {
                //criança
                img.setAttribute('src', 'mulher/fcriancam.png')
            } else if (idade >= 15 && idade <= 21) {
                //adolecente
                img.setAttribute('src', 'mulher/fadolecente.png')
            } else if (idade >= 22 && idade < 50) {
                //Mulher
                img.setAttribute('src', 'mulher/mulher.png')
            } else if (idade > 50) {
                //idoso
                img.setAttribute('src', 'mulher/fidosa.png')
            }
        } else {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5) {
                //bebe
                img.setAttribute('src', 'homem/mbebe.png')
            } else if(idade >= 6 && idade <= 14) {
                //criança
                img.setAttribute('src', 'homem/crianca.png')
            } else if (idade >= 15 && idade <= 21) {
                //adolecente
                img.setAttribute('src', 'homem/madolecente.png')
            } else if (idade >= 22 && idade < 50) {
                //homem
                img.setAttribute('src', 'homem/homem.png')
            } else if (idade > 50) {
                //idoso
                img.setAttribute('src', 'homem/midoso.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}