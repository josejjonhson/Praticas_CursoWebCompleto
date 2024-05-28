const [valor1, valor2, valor3, valor4] = [10, 20, 30, 40]

const soma = valor1 + valor2 + valor2 + valor4
const subtracao = valor4 - valor2
const multiplicacao = valor2 * valor1
const divisao = valor4 / valor1
const [resto1, resto2] = [1 % 1, 3 % 2]

console.log('As quatro operações básicas:')
console.log(`${valor1} + ${valor2} + ${valor3} + ${valor4} = ${soma}`)
console.log(`${valor4} - ${valor2} = ${subtracao}`)
console.log(`${valor2} x ${valor1} = ${multiplicacao}`)
console.log(`${valor4} / ${valor1} = ${divisao}`)
console.log('Itilizando o operador de resto/módulo:')
console.log(`Modulo de 1 / 1 é = ${resto1}`)
console.log(`Modulo de 3 / 2 é = ${resto2}`)

console.log('\n')

// Utilizando função
function realizarOperacao(val1, val2, operacao = 'soma') {
    if(operacao === 'soma') {
        return val1 + val2
    } else if(operacao === 'subtração') {
        return val1 - val2
    } else if(operacao === 'multiplicação') {
        return val1 * val2
    } else if(operacao === 'divisão') {
        return val1 / val2
    } else {
        return 'Operação inválida!'
    }
}

console.log(realizarOperacao(2, 2, 'soma'))
console.log(realizarOperacao(4, 2, 'subtração'))
console.log(realizarOperacao(2, 3, 'multiplicação'))
console.log(realizarOperacao(4, 2, 'divisão'))
console.log(realizarOperacao(2, 2, 'josé jonhson'))