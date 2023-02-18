// add style

let tagH1 = document.querySelector('h1')

tagH1.style.color = 'red';

tagH1.style.backgroundColor = "black"

let listaUl1 = document.querySelector('#lista')

listaUl1.style.color = 'darkgray'
listaUl1.style.backgroundColor = 'gray'

// propriedade do document

console.log(document.body) // ele vai amostra tudo dentro do body do html

console.log(document.head) // ele vai amostrar tudo dentro do head do html

console.log(document.links[0])

document.links[0].textContent = 'google' // aqui eu alterei o nome do link

console.log(document.title)

document.title = 'adicionado stylo e propriedade de document' // aqui eu estou alterando o title do head do html

console.log(document.title)

console.log(document.URL)
