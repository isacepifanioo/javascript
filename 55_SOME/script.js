// metodo find() => ele permite pesquisar os elemento dentro do determiando array e ele retorna o resultado desse array quando ele encontrar

const p_array = window.document.getElementById('arrayJs')
const btn_pesquisar = window.document.getElementById('butão')
const resposta = document.querySelector('#resposta')

// aqui eu estou imprimindo minha array na tela
const lista = [34,18,29,18,24,63,33]
p_array.textContent = '[' + lista + ']'


btn_pesquisar.addEventListener('click', (evt) => {
        
    const res = lista.every((el, i) => {
        if (el < 18) {
            resposta.textContent = `O valor da posição ${i} não estar entre os conforme solicitado`
        }
        return el>=18
    })
    console.log(res)
    if (res) {
        resposta.textContent = 'tudo ok'
    } 
    
})

