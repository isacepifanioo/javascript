let novoParagrofo = document.createElement('p') // <= aqui eu criei uma tag <p>
// paragrafo

let texto = document.createTextNode('esse e um texto criado por javascript')
// <= aqui eu criei um texto qualquer

novoParagrofo.appendChild(texto) // aqui eu coloquei o meu texto dentro do meu paragrafo

let body = document.querySelector('body') // <= aqui eu chamei o body do meu html

body.appendChild(novoParagrofo) // <= aqui eu coloquei meu paragrafo dentro no body

// ===========================================================================

let tagH1 = document.createElement('h1')

let titulo = document.createTextNode('Esse h1 foi criado por js')

tagH1.appendChild(titulo)

// console.log(tagH1) => so para verificar

body.appendChild(tagH1)

// ===========================================================================

let conteiner = document.getElementById('conteiner')

let span = document.createElement('span')

span.appendChild(document.createTextNode('essa e meu texto de span'))

conteiner.appendChild(span)