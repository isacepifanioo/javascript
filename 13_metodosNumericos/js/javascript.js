// O parseFloat

// float são numero real

console.log(parseFloat('23.2')) // ele tranforma numero que estar em string e number
console.log(Number.parseFloat(87.5)) 

// O parseInt

// int são numeros inteiro

console.log(parseInt('83.3')) // ele tranforma numero que estar em string e number e tira a casa decimal
console.log(Number.parseInt(65.23)) // ele tirou so a casa decimal

// toFixed

console.log(34.67899876543.toFixed(1)) // toFixed => ele vai arredondar o numero e colocar quantas casa decimais você quer!

// isNaN

// isNaN => que dizer não e um numero

console.log(isNaN("teste")) // true. porque 'teste' não e um numero
console.log(isNaN(21)) // false. porque 21 e um numero
console.log(isNaN('23')) // false. porque '23' e um numero. mesmo sendo string

// MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE) // aqui e o maximo valor do js. passou disso vai da +Infinity
console.log(Number.MIN_VALUE) // aqui e o minimo valor do js. passou disso vai da -Infinity

