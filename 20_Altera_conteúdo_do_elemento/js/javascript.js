// selecionar elemento
let mudaTexto = document.querySelector('h1')
console.log(mudaTexto)

// innerHTML

mudaTexto.innerHTML = 'outro titulo'

// textContent => esse e o metodo mais recomendado

let mudaTi2 = document.querySelector('h2')

mudaTi2.textContent = 'mudando o titolo h2'