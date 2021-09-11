for (i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} es par`)
    }
}

console.log("\n")
for (i = 0; i < 10; i++) {
    console.log(`${i} * 9 = ${i * 9}`)
}

console.log("\n")
for (i = 1; i < 11; i++){
    console.log(`Tabla del ${i}`)
    for (j=0; j<11; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
}