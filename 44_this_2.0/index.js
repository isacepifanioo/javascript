function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

        
    this.função_arrow = function() {

        setTimeout(() => {

            console.log(this.nome)
            console.log(this.nota)

        }, 2000)


    }

}

const res = new aluno('isac', 100)
res.função_arrow()