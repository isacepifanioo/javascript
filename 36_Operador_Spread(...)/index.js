// Resumindo Operador Spread (...) => ele vai pega uma coleção e espalhar de forma individual





// Operador Spread (...)
console.log('1º Explicação')
// aqui e uma demostração colocando 2 obj dentro de 1 obj com operador sprend

let n1 = [1, 5, 7];
let n2 = [22, 99, 11, 19, 99];
let n3 = [...n1,...n2];

//console.log('n1: '+ n1)
//console.log('n2: '+ n2)
console.log('n3: '+ n3) 

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

console.log('2º Explicação')

const jogador1 = {nome:'isac', enegia:180, power:30, velocidade:120}
const jogador2 = {nome:'bruno', enegia:200, magia:38, defesa:60}
const jogador3 = {...jogador1, ...jogador2} // => ... permite que jogador3 fique com todos os atributos de todos obj
// se não tivese '...' ele ia amostrar jogador1 e o jogador2 normalmente 
console.log(jogador3)

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

console.log('3º Explicação')

const soma=(v1, v2, v3) => {
    return v1 + v2 + v3
}
let valor = [5, 8, 9]


// console.log(soma(valor)) => ele vai pega os valor de dentro do obj e vai colocar como um so. assim ele não vai conseguir somar

console.log(soma(...valor)) // ... => com operador  Spread ele vai espalha cada valor para uma propriedade conseguindo soma cada uma delas 

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('4º Explicação') // nessa explicação vou estar ultilizando html


const obj1 = document.getElementsByTagName('div')
console.log(obj1)
// no 1º ele vai me mostra o HTMLcollection
// no HTMLcollection so recebe elementos html



const obj2 = [...document.getElementsByTagName('div')]
console.log(obj2)
// no 2º ele vai mostrar um array de elementos
// ja um array eu posso adicionar outros tipos de elementos

obj2.forEach(element => {
    console.log(element) // ele vai me retornar o que estar dentro do obj2
}); 

/* 
obj1.forEach(element => {
    console.log(element) => vai retornar 'erro' ele vai dizer que forEach não e reconhecido como função obj1
}); 
*/
