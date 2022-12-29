function fatorial(n) {
    let fat = 1
    for(let c = n ; c > 1; c--) {
        console.log(c)
        fat*= c
    }
    return fat
}
console.log(fatorial(5))
