// map() => Ele permite que você execute uma determinada operação em cada item de um array e retorne um novo array com os resultados dessas operações.

let el = document.getElementsByTagName('div')
el = [...el]
el.map((e, i) => { // e => 'el' vai para para 'e' e "i" se torna a posição 
    console.log(e)
})

// nesse exemplo eu peguei a tag <div> do html, no total era 6 div 
// quando eu tento da "console.log" ele vai me amostrar 6 div dentro de um console
// com map() eu consigo pega cada div como se fosse unica 