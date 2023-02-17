let dados = {
    nome: 'isac',
    idade: 23,
    falar: function() { // function dentro do object e um metodo
        console.log('Hello World')
    },
    soma: function(a, b) { 
        return a + b
    }
}

console.log(dados.nome) 

dados.falar()

let soma = dados.soma(6, 5)
console.log(soma)