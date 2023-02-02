var hora = new Date()
var agora =  hora.getHours() 
if (agora >= 5 && agora <= 12) {
    console.log('Bom dia')
} else if (agora >= 13 && agora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}