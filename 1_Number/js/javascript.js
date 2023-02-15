// number, string, boolean, null e undefined, object;
// Verificar com => typeOf;

//  possui três Valores simbólicos: 
// +Infinity == Valores positivo
// -Infinity == Valores negativo
//  NaN == Uma operação matematica que não resulta em um numero

let numero = 5;
console.log(numero);
console.log(typeof numero); // Number

let float = 5.80;
console.log(float);
console.log(typeof float); // Number

/* Independente se o numero e real ou inteiro o tipo dele sempre vai ser Number */

let textocomNumeros = '512';
console.log(textocomNumeros);
console.log(typeof textocomNumeros); // String

// Tudo entre Aspas ==> '' E uma string

console.log(typeof NaN); // String
console.log(typeof +Infinity); // String
console.log(typeof -Infinity); // String

