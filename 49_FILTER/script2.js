const numeros = [18, 12, 17, 39, 71, 40, 41, 83, 6, 22, 1,]

const numeroMenor20 = numeros.filter((val) => { // aqui eu estou trabalhando com a função dentro do filter
    if (val < 20) { 
        return val
    }
})

const numeroMaior = numeros.filter((val) => {
    if (val >= 20) {
        return val
    }
})

console.log('Numeros maior que 20: ' + numeroMaior)
console.log('Numeros menor que 20: ' + numeroMenor20)