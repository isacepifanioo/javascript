alert ('Esse teste foi focado em apenas programação Js, por conta disso não esta centralizado em alguns depositivo')
function clickAqui(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var nasc = window.document.getElementById('data')
    var res = window.document.getElementById('res')
    Number(nasc.value)
    var img = document.createElement('img')
    var idade = ano - nasc.value
    if (nasc.value > ano || nasc.value == 0) {
        alert('[ERRO] Você colocou um Ano invalido. Tente Novamente!')
    } else {
        var fsex = window.document.getElementsByName('sexo')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5) {
                //bebe
                img.setAttribute('src', 'homem/mbebe.png')
            } else if (idade <= 14) {
                img.setAttribute('src', 'homem/crianca.png')
            } else if (idade <= 21) {
                //adolencete
                img.setAttribute('src', 'homem/madolecente.png')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'homem/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem/midoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5) {
                //bebe
                img.setAttribute('src', 'mulher/fcrianca.png')
            } else if (idade <= 14) {
                img.setAttribute('src', 'mulher/fcriancam.png')
            } else if (idade <= 21) {
                //adolencete
                img.setAttribute('src', 'mulher/fadolecente.png')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'mulher/mulher.png')
            } else {
                img.setAttribute('src', 'mulher/fidosa.png')
                //idoso
            }
        }
        
    }
    res.style.textAlign = 'center'
    res.innerHTML = ` detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}