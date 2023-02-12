output = ''
let res = 1
function fatorial(numb) {
  for (let i = numb;i > 0;i--) {
    output += i + ''
    if (i > 1) {
      res *= i
      output += ' x '
    }
  }
}

let resultado = fatorial(5)
console.log(output, ' = ', res)