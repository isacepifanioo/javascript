function clickAqui() {
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

        if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
            alert('[ERRO] Uma caixa ficou vazia preencha, E tente novamente') 
        } else {
            res.innerHTML = `Contando..`
            var i = Number(ini.value)
            var f = Number(fim.value)
            var p = Number(pas.value)
            if (i < f) {
                //contagem crescente
                for (var c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            } else {
                //contagem regresiva
                for (var c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }          
        }
        res.innerHTML += '\u{1F3C1}' 
}














/* c = 1
while (c < 6) {
    console.log(c)
    c++
} */
