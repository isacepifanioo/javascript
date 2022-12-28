function clickAqui(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var nasc = window.document.getElementById('data')
    var res = window.document.getElementById('res')
    Number(nasc.value)
    var idade = ano - nasc.value
    if (nasc.value > ano || nasc.value == 0) {
        alert('[ERRO] Você colocou um Ano invalido. Tente Novamente!')
    } else {
        var fsex = window.document.getElementsByName('sexo')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        
    }
    res.innerHTML = ` detectamos ${genero} com ${idade} anos`
}