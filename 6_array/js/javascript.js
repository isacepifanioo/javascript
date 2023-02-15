// na verdade os array são considerado object em javascript, porem servem como lista
// podemos ter itens de qualquer tipo de dados tambem 
// porem não por chave e valor, e sim por índice

let arr = ['isac', 38, 22, true, false, 'js', {teste: 1, teste: 2,}];
console.log(arr[1]) // 38

// inserir um novo elemento

arr[7] = 'e2' // Ele vai colocar o valor na posição 7

arr[0] = 62 // Ele vai colocar o valor na posição 0

console.log(arr)