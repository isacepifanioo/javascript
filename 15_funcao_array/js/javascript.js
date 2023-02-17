// push

console.log('===push===')

let lista = [1, 2, 3, 4, 5]
lista.push(6) // push vai adicionar mais um elemento no final da arrey
lista.push('eita como ta de boa') // so outro exemplo!
console.log(lista)

// pop 

console.log('===pop===')

lista.pop() // pop => vai tirar o ultimo valor dentro da array
console.log(lista) // ele tirou o "eita como ta de boa"

// unshift

console.log('===unshift===')

lista.unshift('Teste') // unshift => vai adicionar mais um elemento no começo da array
console.log(lista)


// shift

console.log('===shift===')

lista.shift() // shift => ele remove o primeiro elemento dentro do array

console.log(lista)

// acessar o ultimo elemento

console.log('===acessarUltimoElemento===')

console.log(lista[lista.length - 1])


// isArray

console.log('===isArray===')

console.log(Array.isArray(lista)) // true => pq lista e um array
// isArray => e para verificar se e uma arrey

console.log(Array.isArray(5)) // false => pq 5 não e uma array





// splice

console.log('===splice===') // splice => e para adicionar um elemento e remover um elemento do meio da lista

lista.splice(3, 0, 999) // 3 e a posição que eu vou colocar um elemento
// 0 e a quantidade que eu vou apaga 999 e o numero que eu coloquei 
console.log(lista)

lista.splice(5, 1) // 5 e a posição do numero e 1 e a quantidade que eu vou deletar

console.log(lista)

// indexOf

console.log('===indexOf===')

console.log(lista.indexOf(3)) // => vai dizer aonde fica a determinada posição


// join

console.log('===join===')

var lista2 = ['o', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei']

console.log(lista2.join(' ')) // assim eu posso transforma uma array e uma string

console.log(lista2.join(',')) // eu tambem posso colocar qualquer coisa entre os espaço

// reverso

console.log('===reverso===') // reverso => colocar todos os valores de tras para frente

lista2.reverse()
console.log(lista2)