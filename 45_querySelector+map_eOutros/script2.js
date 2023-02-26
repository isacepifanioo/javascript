const curso = [...document.getElementsByTagName('div')]

console.log(curso)

curso.map((el) => {

    el.addEventListener('click', (event) => {

        const event2 = event.target
        event2.classList.toggle('destacar')

    })

})
