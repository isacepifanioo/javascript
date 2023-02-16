// O operador ! tamv=bem e conhecido como not
/* O operador muda o valor que a expressão retornou. ou seja se a expressão 
for true ele muda para falso e se for falso ele muda para true */


if (!true) {
    console.log('passou1')
}

if (!false) {
    console.log('passou2')
}

let nome = 'matheus'

if (!(nome == 'carlos')) {
    console.log('Seu nome e matheus')
}