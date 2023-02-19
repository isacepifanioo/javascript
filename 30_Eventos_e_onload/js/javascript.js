// onload e ativado ao carrega a pagina 

window.onload = function() { // quando o window carrega por completo ele vai manda a messagem

    console.log('Carregando dom')


    let title = document.querySelector('title')
    console.log(title)

    let tagH1 = document.querySelector('h1')
    console.log(tagH1)

}

// onload espera todo html ser executado para fazer essa ação


console.log('hello world')

// let title = document.querySelector('title') => nessa caso ia da erro porque eu mudei a posicão do script do html para parte do header. entao para poder fazer isso ele precisa tar dentro do "onload"


