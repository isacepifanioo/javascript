// length 

let nome = 'Isac'
console.log(nome.length) // length e para dizer quantidade de caractere que tem uma string

// indexof

console.log('====indexOf====')
console.log(nome[1]) // ele vair dizer aonde ta a posisão da determinada letra

var frase = 'o rato roeu a roupa do rei'

console.log(frase.indexOf('roeu')) // aqui ele vai me dizer aonde começa a palavra roeu
// aqui ele vai pega o primeiro teste 


// lastIndexOf

console.log('====lastIndexOf====')
var frase002 = 'o rato teste roeu a roupa teste'
console.log(frase002.lastIndexOf('teste'))


// slice

// aqui ele vai corta a frase como eu quiser


var roeu = frase.slice(7, 11) // eu to cortando a frase roeu que estar na posição 7
// como roeu tem 4 letras. então eu vou conta de 7 ate 4, 7 + 4 = 11  

console.log(roeu) 

// replace

let novaFrase = frase.replace('roeu', 'teste') // replace eu posso trocar uma palavra pela outra.
// nessa frase eu troquei 'roeu' => 'teste'
console.log(novaFrase)

// toLowerCase e toUpperCase

let nomeCompleto = 'Isac Epifanio Cavalcante'
 
var nomeMinusculo = nomeCompleto.toLowerCase() // toLowerCase => e para passa todas as letras para minuscula
console.log(nomeMinusculo)

var nomeMaiusculo = nomeCompleto.toUpperCase() // toUpperCase => e para passa todas as letras para maiuscula
console.log(nomeMaiusculo)

// Trim

var nome01 = '      matheus       '
nome01 = nome01.trim() // trim => ele tira os espaço desnecessario
console.log(nome01)

// split

var fraseSplit = frase.split(" ")
console.log(fraseSplit) // ele vai pega cada palavra e separa por virgula

var nomeDasLinguegem = "PHP, Java, javaScript, Python, C#"
console.log(nomeDasLinguegem.split(" ")) // ele vai separar como uma array => lista 