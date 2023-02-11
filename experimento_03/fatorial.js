output = ''
function fatorial(numb) {
    for (let i = 10;i < numb; i--) {
        output += i + ' '
    }
}


let resultado = fatorial(1)
console.log(output)