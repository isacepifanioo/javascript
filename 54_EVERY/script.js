// o metodo every() => o metodo every ele vai verificar se dentro da minha array ta conforme eu queira
// por exemplo eu quero indentificar se dentro da minha array tem so idade >= 18, então ele vai me dizer 
// se tive todoas maiores que 18 ele vai me true senão ele retorna false

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

})

