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
        if (fsex[0].checked) {
            genero = 'Mulher'
        } else {
            genero = 'Homem'
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
}