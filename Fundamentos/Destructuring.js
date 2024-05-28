// Desestruturação de arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [primeiro, segundo, terceiro, quarto, quinto, ...resto] = numeros // '...' antes do nome da variável atribui a ela todo o resto do array.
console.log(primeiro)
console.log(segundo)
console.log(terceiro)
console.log(quarto)
console.log(quinto)
console.log(resto)

// Mais um exemplo com arrays 
console.log('EXEMPLO DOS NÚMEROS')
const [n1, n2, , n3, n4 = 0] = [1, 2, 3, 4]
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

// Exemplo recebendo um array para armazenar
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// Desestruturação de objetos 
const guitarra = {
    marca: 'Gibson',
    modelo: 'Les Paul',
    numTrastes: 14,
    preco: 10.500
}

const {marca: ma, modelo: mo, dono = 'josé'} = guitarra
console.log(ma, mo)
console.log(dono)

// Outro exemplo mais completo

const pessoa = {
    nome: 'josé jonhson',
    idade: 20,
    endereco: {
        rua: 'Rua tal tal tal',
        numero: 1010101010
    }
}

// Para acessar os atributos que estão dentro de endereço
const { endereco: { rua: r, numero: n, cep } } = pessoa
console.log(cep) // Como essa variável não está definida no objeto, é apresentada aqui como undefined
console.log(r, n)    