const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemove = document.querySelector('#btnRemoverCurso')

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
    
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

const nomeDoRadio = () => {
    const todosRadio = [...document.querySelectorAll('input[type=radio]')]

    let radioSelecionado = todosRadio.filter((el, ind, arr) => {
        return el.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    const rs = nomeDoRadio()
    if (rs != undefined) {
        const nomeDoCurso = rs.parentNode.parentNode.firstChild.textContent
        alert('curso selecionado: ' + nomeDoCurso)
    } else {
        alert('[ERRO] Você precisa adiciona uma das opção')
    }
})

btnRemove.addEventListener('click', () => {

    try {
        const rs = nomeDoRadio()
        const nomeDoCurso = rs.parentNode.parentNode
        nomeDoCurso.remove()

    } catch (ex) {
        alert('[ERRO] Você precisa adiciona uma das opção ')
    }
    
})




