// arrow fanction


// forma normal
const soma1 = function(v1, v2){
    return v1 + v2
}

// arrow fanction 
const soma2 = (v1, v2) => { // arrow fanction. que dizer função de seta 
    return v1 + v2
}

console.log('return normal: ' + soma1(5, 8))
console.log('return com arrow: ' + soma2(5, 8))

// arrow fanction e aa mesma coisa de uma fanction normal. porem tem algumas regras

// quando usar so 1 parametro, não precisa coloca os parenteses => ()
const nome = n => {return n}
console.log(nome('isac'))

// e não necessariamente vai precisa da return 
const add = n => n+10 // quando eu não usar 'return' eu não tenho obrigação de colocar as chaves => {}
console.log(add(10)) 
// obs. isso so vai funcionar se minha função for apenas uma linha. se caso for mais elaborada precisa coloca as chaves => { }