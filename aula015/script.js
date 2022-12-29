let num = [5, 6, 3, 9, 2, 4, ]
num.sort()
console.log(num)
console.log(`o vetor num tem ${num.length} numeros`)
console.log(`o meu primeiro vetor e ${num[0]}`)
let pos = num.indexOf(2)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`o valor esta na posição ${pos}`)
}

