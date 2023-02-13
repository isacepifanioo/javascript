//array_&_obj

let pessoa = {  // <- isso e um obj
    nome: 'isac',
    idade: 17,
    falar: function() {
        console.log('Olá, mundo')
    },
    soma: function(a, b) {
        return a + b
    },
}

console.log(pessoa.nome + ' ' + pessoa.idade)

pessoa.falar()
let soma = pessoa.soma(4, 5)
console.log(soma)