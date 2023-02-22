const addBtn = document.querySelector('#add-btn')

function addTask() {

    const title = document.querySelector('#text-box').value;

    if (title) {

        // clonando tamplede

        const tamplede = document.querySelector('.tamplede');
        
        const novaTarefa = tamplede.cloneNode(true);

        // Adicionado titulo

        novaTarefa.querySelector('.task-title').textContent = title;

        // remover classe desnecessaria

        novaTarefa.classList.remove('tamplede');
        novaTarefa.classList.remove('esconder');

        // adicionado tarefa na lista
        
        const listaUl = document.querySelector('#lista');

        listaUl.appendChild(novaTarefa);

        // limpando caixa de texto

        document.querySelector('#text-box').value = '';


        // adicionando o evento de tarefa

        const removebtn = novaTarefa.querySelector('.hide').addEventListener('click', function(){

            removeTarefa(this)

        })

        // adicionar o evento de conclui a atividade


        const feitobtn = novaTarefa.querySelector('.done').addEventListener('click', function() {

            concluirTarefa(this)

        })

    };
} ;

// função para remover a tarefa

function removeTarefa(remove) {

    remove.parentNode.remove(true)

}


// função para marcar e desmacar concluido na tarefa

function concluirTarefa(concluir) {

    const btnComplete = concluir.parentNode

    btnComplete.classList.toggle('feito')

}


// evento de adicionar a tarefa
addBtn.addEventListener('click', function(e){

    e.preventDefault();

    addTask();

});