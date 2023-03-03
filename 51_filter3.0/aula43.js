const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemove = document.querySelector('#btnRemoverCurso')
const btnAddAnstes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAddDepois = document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let indeci = 0

const criaNovoCurso = (cursos) => {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indeci)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=cursos

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento = criaNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indeci++
})

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

btnAddAnstes.addEventListener('click', (evt) => {

    try {
        if (nomeCurso.value != "") {
            const rs = nomeDoRadio()
            const nomeDoCurso = rs.parentNode.parentNode
            const novoCurso = criaNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, nomeDoCurso)
        }  else {
            alert('Adicione o nome do curso!')
        }
    } catch (ex) {
        alert('[ERRO] Você precisa adiciona uma das opção ')
    }

})

btnAddDepois.addEventListener('click', (evt) => {

    try {
        if (nomeCurso.value != "") {
            const rs = nomeDoRadio()
            const nomeDoCurso = rs.parentNode.parentNode.nextSibling
            const novoCurso = criaNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, nomeDoCurso)
        }  else {
        alert('Adicione o nome do curso!')
        }
    } catch (ex) {
        alert('[ERRO] Você precisa adiciona uma das opção ')
    }

})


// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling