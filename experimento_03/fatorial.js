output = ''
function fatorial(numb) {
    for (let i = 0;i < numb; i++) {
        output += i + ' '
    }
}

let resultado = fatorial(10)
console.log(output)