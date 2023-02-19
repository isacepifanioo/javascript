// "keydown" e "keyup"

// Os eventos "keydown" e "keyup" são úteis para detectar a entrada do usuário em formulários e campos de texto, bem como para ativar ações com base em teclas de atalho do teclado.


document.addEventListener('keydown', function(event){ // keydown => acionado quando uma tecla do teclado é pressionada.

    console.log(event.key) //  O objeto "key" em JavaScript é usado para fornecer informações sobre a tecla pressionada durante um evento de teclado, como o "keydown". É uma propriedade que contém o valor da tecla que foi pressionada, como por exemplo, "A", "Enter", "Shift", etc. Isso permite que você possa verificar qual tecla foi pressionada e agir de acordo em sua aplicação.

    if (event.key === 'Enter') {

        console.log('apertou enter')

    }

})


document.addEventListener('keyup', function(event) {  // keyup => acionado quando a tecla do teclado é liberada.

    if (event.key === 'Enter') {

        console.log('você soltou o enter')

    }

})




