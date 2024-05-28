const operandoUm = 8
let operandoDois = 2


console.log(`${operandoDois} += ${operandoUm} = ${operandoDois += operandoUm}`)
console.log(`${operandoDois} -= ${operandoUm} = ${operandoDois -= operandoUm}`)
console.log(`${operandoDois} *= ${operandoUm} = ${operandoDois *= operandoUm}`)
console.log(`${operandoDois} /= ${operandoUm} = ${operandoDois /= operandoUm}`)

// Operador de resto da divisão | módulo
const listaDeNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function verParImpar(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
            console.log(`${array[i]}: impar`)
        } else {
            console.log(`${array[i]}: par`)
        }
    }
}

verParImpar(listaDeNumeros)