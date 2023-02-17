let lista = document.getElementsByClassName('item')
console.log(lista)


// querySelectorAll => varios seletores

// eu posso dizer qual determinado class ou ate msm tag que eu quero
// mesmo sendo a msm class ou tag 

let lista1 = document.querySelectorAll('#lista .item')
console.log(lista1)

let lista2 = document.querySelectorAll('#lista2 .item') // aqui eu estou acessando os item somente da lista 2
console.log(lista2)


// querySelector => somente 1 seletor

let lista3 = document.querySelector('#lista') // aqui ele so acessa todos os item que estar dentro da #lista
console.log(lista3)

let lista4 = document.querySelector('#paragrafo span') // querySelector so da acesso a uma dertemina tag
console.log(lista4)
