const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn-copia')
const curso = [...document.querySelectorAll('.divDaCaixa')]

curso.map((el) => {

    el.addEventListener('click', (evet) => {

        const divSelecionado = evet.target
        divSelecionado.classList.toggle('selecionado')

    })

})

curso.map((el) => {

    el.addEventListener('click', (evet) => {

        const divVolta = evet.target
        divVolta.classList.toggle('volta')

    })

})

btn.addEventListener('click', (evet) => {

    const selecionado = [...document.querySelectorAll('.selecionado')]
    selecionado.map((el) => {

        caixa2.appendChild(el)

    })

    const volta = [...document.querySelectorAll('.volta')]
    volta.map((el) => {

        caixa1.appendChild(el)

    })
    
})
