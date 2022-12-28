function clickAqui() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('tabu')
    if(num.value == 0) {
        alert('[ERRO] preencha o campo!')
    } else {
        var n = Number(num.value)
        c = 1
        while (c < n) {
            var item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}