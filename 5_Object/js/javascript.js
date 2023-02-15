// Funciona como uma array associativo de outras linguagem; 
// podemos criar propriedade com valor chave;
// a ideia e guarda um conjutos de valores para ultilizar posteriormente

let obj = {
    nome: 'isac',
    idade: 17,
    profissão: 'Perde tempo',
}

console.log(obj); // {nome: 'isac', idade: 17, profissão: 'Perde tempo'}
console.log(typeof obj); // Object

console.log(obj.nome); // nome
console.log(obj.idade); // idade
console.log(obj.profissão); // profissão

// mudando a propriedade do object e criando uma nova

obj.nome = 'pedro';
obj.idade = 28;
obj.profissão = 'professor';
obj.livro = 'Mente Milionaria'

console.log(obj)
console.log(obj.nome); // nome
console.log(obj.idade); // idade
console.log(obj.profissão); // profissão
console.log(obj.livro) // livro
