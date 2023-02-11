function parOuImpar(numb) {
     if (numb % 2 == 0) {
        return 'par';
     } else {
        return 'impar';
     }
}

const resultado = parOuImpar(19)
console.log(resultado)