let colocação = 6

switch(colocação) {
    case 1:
        console.log('primeiro lugar')
        break
    case 2:
        console.log('segundo lugar')
        break
    case 3:
        console.log('terceiro lugar')
        break
    case 4: case 5: case 6:
        console.log('premio de participação')
        break
    default:
        console.log('você perdeu')
        break
}