let amigos = {nome: 'isac', sexo: 'M', peso: 57.4, engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigos.engordar(2)
console.log(`${amigos.nome} pesa ${amigos.peso}kg`)