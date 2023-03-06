// metodo some() => ele permite pesquisar os elemento dentro do array se tem "Algum" valor determinado pelo menos 1
// no every tem que ser todos no some tem que ter pelo menos 1

const p_array = window.document.getElementById('arrayJs')
const btn_pesquisar = window.document.getElementById('butão')
const resposta = document.querySelector('#resposta')

// aqui eu estou imprimindo minha array na tela
const lista = [12,16,15,2,6,19]
p_array.textContent = '[' + lista + ']'


btn_pesquisar.addEventListener('click', (evt) => {
        
    const res = lista.some((el, i) => {
        return el>=18
    })
    console.log(res)
    if (res) {
        resposta.textContent = 'tudo ok'
    } 
    
})

