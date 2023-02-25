function* cores() { // functio* => e desse jeito que faz uma função geradora
    yield 'vermelho' 
    yield 'verde'
    yield 'azul' // yield => e bem parecida com return. Porem yield é usada em funções geradoras para pausar e retomar a execução da função em momentos específicos
}

// na função geradora ele vai excutar o codigo ate encontra o primeiro "yield" depois disso ele vai para ignorando todo o resto

const itc = cores()
console.log(itc.next().value) // next() => que dizer a proxima return da execução .value e o valor da yield. nesse caso e 'vermelho'
console.log(itc.next().value) // verde
console.log(itc.next().value) // azul  
console.log(itc.next().value) // undefined => isso porque não existe mais o proximo 