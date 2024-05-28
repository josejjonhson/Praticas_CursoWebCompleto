function randomizeNumeros({min = 10, max = 1000} = {}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(randomizeNumeros({min: 100, max: 1000}))
console.log(randomizeNumeros({min: 100}))
console.log(randomizeNumeros({}))
// console.log(rand())


