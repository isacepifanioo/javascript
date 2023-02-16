// Funções são blocos de códigos reutilizaveis;
// Ou seja, evitamos a repetição da logica de um programa em diversas partes do código;
// A função precisa ser invocada para ser executada;

function primeiraFunção() {

console.log("Hello World das funções!"); // <= essa função não vai aparecer enquanto eu não chama a função 'primeiraFunção'

};

primeiraFunção(); // <= aqui eu faço a chamada para aparecer o console.log da função "primeiraFunção"

// =================================================================================================================================

function dizerNome(nome) { // Aqui e uma fanction com argumento chamado "nome"

    console.log('Meu nome e: ' + nome);

};

dizerNome('isac') // aqui eu chamei a função dando um argumento no caso o argumento que eu dei foi 'Isac'
dizerNome('xavier') // Eu tbm posso dar varios outros argumento quando eu chamar a função

var bancoDeDados = 'joão'
dizerNome(bancoDeDados) // eu tbm posso passa como variaveis

// =================================================================================================================================

function soma(a, b) { // posso colocar mais de um argumento separando por vírgula;
    
    let soma = a + b
    return soma
    
    // Ou posso colocar so "return a + b" que da no mesmo!
 
}

let resultado = soma(8, 8) // Aqui eu dei 2 argumento separando dando virgula o valor 'a' vai receber => 4 eo valor b vai receber => 8
console.log(resultado) // <= Aqui eu mandei ele exibir o valor dos resultado

let soma2 = soma (4, 9)
console.log(soma2)

console.log(soma(5, 7)) // qui eu fiz exatamente a msm coisa de cima mais não necessariamente precisa cria outras variaveis

// =================================================================================================================================