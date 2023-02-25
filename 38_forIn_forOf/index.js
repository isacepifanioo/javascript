// For in && For of


let num = [3, 5, 9, 10, 3, 1]

for (n in num) { // in => se eu quiser pega as posição eu vou usar for in
    console.log(n)
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=')

for (n of num) { // of => se eu quiser pega os elementos eu vou usar for of
    console.log(n)
}

//  for (var i = 0; i < num.length; i++) {
//      console.log(num[i])
//  }


// usando html

const obj1 = document.getElementsByTagName('div')

for (x of obj1) {
    console.log(x) // aqui ele pego todos os elemento do html
}

for (x in obj1) {
    console.log(x) // aqui ele so vai me dizer a posição de cada 
}
