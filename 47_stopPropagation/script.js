const caixa = document.querySelector('#caixa')
const buttomC1 = document.querySelector('#c1')
const curso = [...document.querySelectorAll('.curso')]

buttomC1.addEventListener('click', (evet) => {

    evet.stopPropagation()

})

caixa.addEventListener('click', (evet) => {
    console.log(evet.target)
})

curso.map((el) => {

    el.addEventListener('click', (evt) => {
        evt.stopPropagation()
    })

})
