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

const cursosSelecionado = () => {
    const removeSeleção = [...document.querySelectorAll('.selecionado')]
    removeSeleção.map((slc) => {
        
        slc.classList.remove('selecionado')

    })
}

const criaNovoCurso = (cursos) => {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indeci)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=cursos
    novoElemento.addEventListener('click', (evt) => {
        cursosSelecionado()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento = criaNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indeci++
})

const nomeDoCurso = () => {
    const removeSeleção = [...document.querySelectorAll('.selecionado')]
    return removeSeleção[0]
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    try {
        alert('curso selecionado: ' + nomeDoCurso().textContent)
    } catch (ex) {
        alert('[ERRO] Você precisa adiciona uma das opção')
    }
})

btnRemove.addEventListener('click', () => {

    try {
        const rs = nomeDoCurso()
        rs.remove()

    } catch (ex) {
        alert('[ERRO] Você precisa adiciona uma das opção ')
    }
    
})

btnAddAnstes.addEventListener('click', (evt) => {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criaNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, nomeDoCurso())
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
            const novoCurso = criaNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, nomeDoCurso().nextSibling)
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