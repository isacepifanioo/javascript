const converterInt = (e) => parseInt(e)
let num = ['1','3','8','7','5'].map(converterInt)
console.log(num) // aqui ele converteu todas as string em number

// aqui eu vou multiplicar a minha array

const dobra = (x) => x * 2 // aqui eu estou dando uma função para variavel "dobra"
num = ['1','3','8','7','5'].map(dobra) // e aqui eu estou colocando para dobra com "map(dobra)"
console.log(num)