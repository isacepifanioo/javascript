function* interagir() {
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito'
    return "Seu nome e " + nome + "! E seu esporte favorito e " + esporte
}

const itp = interagir()
console.log(itp.next().value) // aqui ele da retornado com "return", a frase com os valores que eu dei logo abaixo
console.log(itp.next('isac').value) // aqui o nome "isac" ta atribuindo ao const nome
console.log(itp.next('futebol').value) // aqui o nome "futebol" ta atribuindo ao const esporte
