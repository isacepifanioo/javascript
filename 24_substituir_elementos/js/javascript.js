// criar um elemento

let tagH3 = document.createElement('h3')

tagH3.classList = 'substituto'

let texto = document.createTextNode('esse o eo texto do h3')

tagH3.appendChild(texto)

console.log(tagH3)


// selecionar um elemento que quer trocar


let tagH1 = document.querySelector('h1')


// selecionar o pai do


let pai = tagH1.parentNode


// trocar os elementos


pai.replaceChild(tagH3, tagH1)