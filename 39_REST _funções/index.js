// Parâmetros REST em funções 
// resumindo o que seria o Parâmetros REST e coloca varios valores dentro de uma mesma função usando operador spread => (...)
// exemplo

function soma(...valores) { // operador spread => faz com que eu possa coloca a quantidade de valor que eu quiser.
    let res = 0;
    for (x of valores) { // of => faz que eu peguei o valor de "valores" diretamente
        res += x
    }
    return res
}


console.log(soma(5, 5, 10, 9, 1))