let val = [7, 8, 5, 6, 3, 9, 1]
val.sort()
/*
for (pos = 0; pos < val.length; pos++) {
    console.log(`A posição ${pos} esta no vetor ${val[pos]}`)
}
*/

for (let pos in val) {
    console.log(`A posição ${pos} esta no vetor ${val[pos]}`)
}