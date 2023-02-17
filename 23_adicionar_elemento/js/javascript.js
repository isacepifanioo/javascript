// criar elemento

let div1 = document.createElement('div')

div1.classList = 'conteiner2' // classList => E para colocar uma .classe na tag

console.log(div1)

let conteiner = document.querySelector('#conteiner')

// inserido elemento filho!   ⬇  
conteiner.appendChild(div1)


// insertbofore - insere antes

let div2 = document.createElement('div')

div2.classList = 'divBefore'

let referencia = document.querySelector('#conteiner .conteiner2')

conteiner.insertBefore(div2, referencia) // eu posso dizer aonde eu quero colocar
// div2 foi o que eu add e a referencia era o luga aonde eu queria que tava 
