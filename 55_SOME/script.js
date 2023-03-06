// O metodo reduce() => ele tem o parametro de anterior e atual, o parametro atual e exatamente o que estar dentro do array contado na posição 1 ja o parametro anterior não exatamente e o que estar dentro da array
// o parametro antes e a soma dos dois ultimo valor 
// por exemplo um aray [1,2,3,4,5] ele vai conta 1, 3, 6, 10. porque ele vai pega o 1 e no segundo ele vai soma com o 2 então fica 3 depois ele vai pega o proximo que tambem e 3 e vai soma que vai da 6 depois ele vai para 4 que vira atual e vai soma com anterior que e 6 que fica 10


const p_array = window.document.getElementById('arrayJs')
const btn_pesquisar = window.document.getElementById('butão')
const resposta = document.querySelector('#resposta')

// aqui eu estou imprimindo minha array na tela
const lista = [1,2,3,4,5]
p_array.textContent = '[' + lista + ']'
const arrayAnt = []
const arrayAtual = []
const arrayDobro = []

btn_pesquisar.addEventListener('click', (evt) => {

    arrayDobro.push(lista[0] * 2)

    const valor = lista.reduce((anterior, atual, i) => {

        arrayAnt.push(anterior)

        arrayAtual.push(atual)

        arrayDobro.push(atual * 2)

        return anterior += atual

    })

    resposta.innerHTML = 'V.total: ' + valor + `<br/> V.Antes: ` + arrayAnt
    resposta.innerHTML += '<br>V.atual: ' + arrayAtual + `<br/> V.dobro: ` + arrayDobro

    // console.log(valor)
    // console.log(arrayAnt)
    // console.log(arrayAtual)
    // console.log(arrayDobro)
})

