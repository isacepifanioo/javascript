let dados = {
    nome: 'isac',
    idade: 23,
    falar: function() { 
        console.log('Hello World')
    },
    falar2: function () {
       console.log('Ola ' + this.nome + ' Seja bem vindo')
    },
    aniversario: function() {
        return this.idade + 1
    }
}

dados.falar2()

let id = dados.aniversario()
console.log(id)

console.log(this) // this => tem acesso a tudo que estar dentro do window seja comando do proprio javaScript ou ate msm minhas proprias variaveis