// inserir click

// addEventListener => é uma função em JavaScript que permite você criar ações (ou "eventos") quando alguém interage com um elemento em uma página web, como clicar em um botão.

let btn = document.querySelector('#btn')

btn.addEventListener('click', function() { // click e quando eu clicar

    console.log('clicouu')

    btn.style.color = 'red'

})


let title = document.querySelector('h1')

let tagH2 = document.querySelector('.classH2')

title.addEventListener('click', function(){

    console.log('click')

    tagH2.style.display = "none";

})

tagH2.addEventListener('dblclick', function(){ // dblclick => e quando eu clicar 2 vezes 

    console.log('click duplo')

})

// eventos

// // Evento "mouseenter": acionado quando o ponteiro do mouse é movido para dentro do elemento.

// Evento "mouseout": acionado quando o ponteiro do mouse é movido para fora do elemento.

// Evento "keydown": acionado quando uma tecla do teclado é pressionada.

// Evento "keyup": acionado quando a tecla do teclado é liberada.



// posibilidade de uso do "mouseenter" e "mouseout"

// Os eventos "mouseenter" e "mouseout" são úteis para exibir ou ocultar elementos em uma página da web e fornecer feedback visual ao usuário.




// posibilidade de uso do "keydown" e "keyup"

// Os eventos "keydown" e "keyup" são úteis para detectar a entrada do usuário em formulários e campos de texto, bem como para ativar ações com base em teclas de atalho do teclado.


let paragrafo = document.querySelector('#paragrafo')

paragrafo.classList.remove('hide')
