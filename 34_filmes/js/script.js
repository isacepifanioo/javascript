const addBtn = document.querySelector('#butão')

function addFilmes() {

    // pegando a url da imagem
    const addImg = document.querySelector('#url-imagem').value
    // pegando a url do site do filme
    const addFilmes = document.querySelector('#url-filmes').value
    

    if (addImg && addFilmes) {
    
        // clona minha div 'imgFilmes'
        const divFilmes = document.querySelector('.imgFilmes')
        const divImgFilmes = divFilmes.cloneNode(true)


        // colocar divFilmes dentro da div #row
        const divRow = document.querySelector('#row')
        divRow.appendChild(divImgFilmes)

        // cria um elemento <img> 
        const img = document.createElement('img')
        img.classList = 'imagem'
        //console.log(img)

        // cria um src para img 
        const src = document.createAttribute('src')

        // adicionado o atributo src dentro da img e dando um valor para dentro da src
        img.src = addImg

        // cria um elemento <a> 
        const tagA = document.createElement('a')

        // criando um elemento href dentro do <a>
        const href = document.createAttribute('href')
        
        // colocando elemento target="_blank" dentro da tagA
        tagA.setAttribute('target', '_blank')

        // colocadno um elemento href dentro do <a> e atribuido um valor dentro dele
        tagA.href = addFilmes
        
        // adiciona o elemento <a> dentro do elemento <img>
        tagA.appendChild(img)
        //console.log(tagA)

        // adicionado tudo dentro da div
        divImgFilmes.appendChild(tagA)

        // limpando as input text
        document.querySelector('#url-imagem').value = ''
        document.querySelector('#url-filmes').value = ''

    } else {
        alert('[ERRO] peencha todos os campos')
    } 
}    


addBtn.addEventListener('click', function(e){

    e.preventDefault()

    addFilmes()

});