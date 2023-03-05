// metodo find() => ele permite pesquisar os elemento dentro do determiando array e ele retorna o resultado desse array quando ele encontrar


const p_array = window.document.getElementById('arrayJs')
const btn_pesquisar = window.document.getElementById('butão')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const resposta = document.querySelector('#resposta')

// aqui eu estou imprimindo minha array na tela
const lista = [6,5,3,22,6,677,88,33,4,6,2,6]
p_array.textContent = '[' + lista + ']'
btn_pesquisar.addEventListener('click', (evt) => {

    resposta.textContent = 'Valor não encontrado!'

    const li = lista.find((el, i) => {
        if (el == txt_pesquisar.value) {
            resposta.textContent = `O valor encontrado ${el} na posição ${i}`
        }
    })
})

