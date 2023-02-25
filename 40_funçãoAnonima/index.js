const soma = function(...valores) { // funcão anonima. e uma função que não tem nome, e que recebe um nome atraves de uma variavel
    let res = 0;
    for (a of valores) {
        res += a
    }
    return res
}

console.log(soma(5,10)) 


console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=') 


// construtor dentro de uma função anonima 

const f = new Function('v1', 'v2', 'v3', 'return (v1 + v2) * v3') // função construtror anonima
// função construtor. ela tem new e depois o Function. 
// na função construtor function tem o 'F' maiusculo
// todos os parametros tem que ter aspa => ""

console.log(f(8, 8, 2))