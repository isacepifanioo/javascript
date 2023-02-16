// com break podemos encerrar uma instrução;
// com continue podemos pular uma instrução;

let x = 0;

while(x < 10) {
    console.log(x)
    x++
    if (x == 6) { // quando o x = 6 eu quero que o programa pare
        break 
    }
}
console.log('=========================================')
let j = 0

while (j < 100) {

     j += 10 

    console.log(j)

if (j == 30 || j == 60) {
    console.log('Continue')
    continue
}

   
}