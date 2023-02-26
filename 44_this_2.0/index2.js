const dados1 ={
    nome: 'isac',
    idade: 17,
    profissão: 'dev Junior'
}

const dados2 = {
    nome: 'gabi',
    idade: 21,
    profissão: 'medico'
}

const dados3 = {
    nome: 'joao',
    idade: 35,
    profissão: 'policia'
}

const dados4 = {
    nome: 'biaca',
    idade: 28,
    profissão: 'bombeiro'
}

function comunicar() {

    console.log('Meu nome e: ' + this.nome + ', tenho ' + this.idade + ' trabalho com ' + this.profissão)

}

dados3.comunicar = comunicar
dados3.comunicar()