// tag 

let titulo = document.getElementsByTagName('h1')[0]
// byTagName => e para acessa pelo nome da tag. no nosso exemplo
// eu usei a tag <h1>

console.log(titulo)

let list = document.getElementsByTagName('li')
console.log(list) 
// [3] => que dizer aonde ta posição da tag <li> isso porque eu tenho 5 li



// id

let paragrafo = document.getElementById('paragrafo')
// ById => e para acessa pelo id
console.log(paragrafo)



// class

let itemDaLista = document.getElementsByClassName('item')
// ByClassName => e para acessar pelo class
console.log(itemDaLista)
