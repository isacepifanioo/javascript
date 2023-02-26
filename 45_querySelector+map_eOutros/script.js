const div1 = document.querySelector('#c1')

function msg() {
    alert('ola mundo')
}

div1.addEventListener('click', (event) => {
    const el = event.target // target => ele tras o elemento que disparo o evento
    el.classList.add('destacar') 
})