function* contador() {
    let i = 0;
    while (true) { // aqui e um lop infinito
        yield i++ // aqui ele vai soma +1 porem "yiled" vai para a execução 
    }
}

// então para eu colocar os numero. eu preciso coloca "cont.next().value" quanto mais eu colocar maior eu vou chega
// aqui em baixo eu fui de 0 ate 5

let cont = contador()
console.log(cont.next().value) // 0
console.log(cont.next().value) // 1
console.log(cont.next().value) // 2
console.log(cont.next().value) // 3
console.log(cont.next().value) // 4
console.log(cont.next().value) // 5