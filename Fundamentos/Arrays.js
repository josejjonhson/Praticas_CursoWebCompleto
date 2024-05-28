const marcasDeGuitarra = ['Fender', 'Gibson', 'Squier', 'Epiphone', 'Ibanez', 'Yamaha', 'Tagima', 'Seizi']
const modelosDeGuitarra = ['Telecaster', 'Les Paul', 'Stratocaster', 'SG', 'Flying V', 'Explorer']

// Exemplo envolvendo índices inexistentes
const array = []
array[10] = 'josé jonhson'
console.log(array)

marcasDeGuitarra.pop()
modelosDeGuitarra.pop()

console.log(marcasDeGuitarra)
console.log(modelosDeGuitarra)

console.log(`O tamanho do meu array de marcas é: ${marcasDeGuitarra.length}`)
console.log(`O tamanho do meu array de modelos é: ${modelosDeGuitarra.length}`)

marcasDeGuitarra.push('seizi')
modelosDeGuitarra.push('explorer')

// delete marcasDeGuitarra[0]
// delete modelosDeGuitarra[0]

marcasDeGuitarra.splice(0, 1)
modelosDeGuitarra.splice(0, 1)

console.log(marcasDeGuitarra)
console.log(modelosDeGuitarra)

console.log(marcasDeGuitarra[0])
console.log(modelosDeGuitarra[0])

console.log('Removeu:')
console.log(marcasDeGuitarra.shift())
console.log(modelosDeGuitarra.shift())

console.log(marcasDeGuitarra)
console.log(modelosDeGuitarra)

console.log(`Tipo do array marcas: ${typeof marcasDeGuitarra}`)
console.log(`Tipo do array modelos: ${typeof modelosDeGuitarra}`)