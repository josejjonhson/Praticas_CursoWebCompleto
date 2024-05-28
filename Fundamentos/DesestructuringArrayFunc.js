function numRand([min = 0, max = 1000] = []) {
    if(min > max) {
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(numRand([10, 20]))
console.log(numRand([20]))
console.log(numRand([60]))
console.log(numRand())