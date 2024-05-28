// Função que trata o erro
function tratamentoDeErro(erro) {
    throw {
        nome: erro.name,
        msg: erro.mesage, 
        date: new Date
    }
}

function convertUpperCase(str) {
    try {
        console.log(str.toUpperCase())
    } catch (e) {
        tratamentoDeErro(e)
    } finally {
        console.log('Executa independente do que aconteça!!!!')
    }
} 

const str = 'Oi meu nome é josé, tenho 20 anos e estou procurando minha vaga como programador júnior!'

convertUpperCase(1) // E se eu passar um número aqui???

