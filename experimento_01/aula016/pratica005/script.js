let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumero(num.value) && ! inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.innerText = `o valor ${num.value} Adicionado`
        lista.appendChild(item)
    } else {
        window.alert('[ERRO!] valor em valido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Nenhum valor acima foi adicionado!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerText = ''
        res.innerHTML += `<p>Ao todo temos, ${tot} cadastrado</p>`
        res.innerHTML += `<p>o maior valor informado ${maior}</p>`
        res.innerHTML += `<p>o menor valor informado ${menor}</p>`
        res.innerHTML += `<p>a soma dos valores e ${soma}</p>`
        res.innerHTML += `<p>a media entre os valores e ${media}</p>`

    }
}