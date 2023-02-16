// No javaScript podemos ter varios escopos;
// O global que iniciado em toda a aplicação;
// E os locais que podem existir em várias instruções como as funções 

var a = 1; // escopo global

var b = 5; // escopo global

console.log(a, b);

function texte() {

    var z = 0 // escopo local

    console.log(z)

    console.log(b, a)

}


texte()

//console.log(z) // <= isso da erro porque não existe a variavel "z"

// O escopo local que estar dentro da função, não pode ter acesso dentro no escopo global