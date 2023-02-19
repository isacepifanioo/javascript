// clearTimeout e clearInterval

// clearTimeout

let x = 0

let myTime = setTimeout(function() { // setTimeout => eu consigo da um deley 
// nesse exemplo essa função esta sendo recebida por uma variavel
    console.log('X e igual 0')

}, 500)

x = 5

if (x == 5) {

    console.log('O x não e mais o')
    clearTimeout(myTime) // clearTimeout => eu consigo apaga uma determinada função
    // sem fazer que ele execute 
}


// clearInterval

let myInterval = setInterval(function() { // setInterval => eu consigo executar um comando varias vezes em um detreminado tempo

    console.log('Olá Mundo')

}, 500)

setTimeout(function() {

    console.log('chega de "Ola Mundo"!')
    clearInterval(myInterval)

}, 2000)