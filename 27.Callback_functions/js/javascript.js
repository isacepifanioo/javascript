// Callbeck Function

function exibir(num) {

    console.log('O valor do resultado e: ' + num)

}

// exrbir vai receber callbeck

function soma(a, b, Callbeck) { // a palavra callbeck não e obrigatoria
    let op = a + b
    Callbeck(op)
}

function multiplicar(a, b, cb) {
    let op = a * b
    cb(op)
}

soma(3, 8, exibir) // a a function exibir sempre tem que ta no final

multiplicar(5, 4, exibir)