var agora = new Date()
var hora = agora.getHours()
var res = window.document.getElementById('texto')

hora = 7
res.innerHTML = `<h1>Horario atual ${hora} horas</h1>`
if(hora > 5 && hora < 12) {
       
}