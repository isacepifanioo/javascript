var lista = ['Maçã', 'Laranja', 'Banana', 'Jaca', 'Uva']; // <= 'Array' tambem conhecida como uma 'lista'

let listaUl = document.createElement('ul'); // <= aqui eu estou criando uma tag <ul> do html e passando para a variavel "listaUl"

let body = document.getElementsByTagName('body'); // <= aqui estou selecionado a tag 'body' do html
// (obs: bytagName que dize o nome da tag. que e <body>) body e o corpo do html e la que colocar todas as teg 

// console.log(body); obs como ta no f12

body[0].appendChild(listaUl); // <= aqui eu estou adicionar a tag ul para dentro do body
// appendChild e => adiciona um elemento filho. Ou seja ele vai add 'listaUl' dentro de body

var listaNoBody = document.getElementsByTagName('ul') ;// <= aqui estou selecionado a tag 'ul' que foi criada na lista "3"

console.log(listaNoBody[0]);

for (let i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li') // <= aqui eu criei outra tag chamado <li> 

    var textLi = document.createTextNode(lista[i]) // <= aqui ele ta inserindo 'lista' para dentro 'textLi' 
    // createTextNode => E para transferir um texto para outro texto 
    // Aqui em cima ele ta transferido lista[0 ate 4] para dentro da variavel 'TextLI'
    
    liFor.appendChild(textLi) // <= liFor e o nome que eu dei para a tag <li> e textLi e o nome da variavel que ta recebendo os nome da 'lista'
    // appendChild e => adiciona um elemento filho. Ou seja ele ta colocando o nome da lista dentro da tag <li>

    // console.log(liFor) da para obs no f12

    listaNoBody[0].appendChild(liFor) // ele ta adicionado a tag <li> dentro da <ul> que esta dentro do body

}

/* ex do resultado se fosse no html
<ul>

    <li>maça</li>
    <li>laranja</li>
    <li>banana</li>
    <li>jaca</li>
    <li>uva</li>

</ul> 
*/