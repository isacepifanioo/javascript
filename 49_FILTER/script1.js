// O método filter() é uma função de array em JavaScript que é usada para filtrar elementos de um array com base em uma condição específica e criar um novo array com apenas os elementos que atendem a essa condição.

const maiorIdade = (valor) => {
    if (valor >= 18) {
        return valor
    }
}

const menorIdade = (valor) => {
    if (valor < 18) {
        return valor
    }
}


const idade = [9, 19, 14, 30, 3, 6, 54]
const maior = idade.filter(maiorIdade) // aqui eu vou pega somento os numeros maior
const menor = idade.filter(menorIdade) // aqui eu vou pega somento os numeros menor


console.log(maior) // (3) [19, 30, 54]
console.log(menor) // (4) [9, 14, 3, 6]
