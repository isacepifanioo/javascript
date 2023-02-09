// var 
// let
// const 'não pode altera o valor apos recebe o primeiro'

const nome = prompt('Qual seu nome: ')
let idade = parseInt(prompt('Quantos nos você fez ou vai fazer esse ano? '))
let mesNasc = parseInt(prompt('Em que mes você nasceu? '))
let diaNasc = parseInt(prompt('Em que dia você nasceu? '))
 
const dataDeNasc = 2023 - idade
console.log(`Olá ${nome}. Seja bem vindo`)
console.log(`Sua data de nascimento ${diaNasc}/${mesNasc}/${dataDeNasc}`)
