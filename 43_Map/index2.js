const curso = ['html', 'php', 'javascript', 'csc', 'react']
curso.map((el, i) => { 
    // el => vai receber os nome ddo curso
    // i => vai receber as posição

    console.log('curso: ' + el + ' - Posição do curso: ' + i) // => ele vai mostrar todos os curso e a posição de cada um dele
}) 