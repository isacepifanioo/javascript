const caixa = document.querySelector('#caixa')
const curso = [...document.querySelectorAll('.curso')]

caixa.addEventListener('click', (evet) => {

    console.log(caixa)

})

curso.map((el) => {
    
    el.addEventListener('click', (evet) => {

         evet.stopPropagation() // stopPropagation => serve para evitar click no luga que eu quero

    })

})

// exemplo melhor => caso eu esteja querendo cria um click no luga. mais tem varios outros elementos dentro desse elemento eu posso usar stopPropagation() para fazer que esses outro elemento não seja clicavel