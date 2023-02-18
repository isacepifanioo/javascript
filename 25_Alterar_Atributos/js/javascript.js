// adicionar atributos

let tagH1 = document.querySelector('h1')

tagH1.setAttribute('id', 'title') // < aqui eu estou atribuindo um id com o nome 'title'

console.log(tagH1)

let butão = document.querySelector('#conteiner button')

butão.setAttribute('disabled', 'disabled') // ele adicionou um atributo dentro da tag <botton>

let tagH2 = document.querySelector('.classH2')

tagH2.setAttribute('id', 'idH2') // aqui eu adicionei um id dentro do h2 do html

console.log(tagH2)

// remover atributos

let listaUl = document.querySelector('#lista2')

listaUl.removeAttribute('id') // ele removeu o id da tag <ul> do html

