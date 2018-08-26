const Pessoa = require('../pessoas/pessoa.model')
let pessoasSalvas = []

const embaralhar = valores =>
    valores
        .map(a => [Math.random(),a])
        .sort((a,b) => a[0]-b[0])
        .map((a) => a[1])

const sortear = pessoaIds =>
    pessoaIds.reduce( (accumulator, currentValue, currentIndex) => {
        if(currentIndex < pessoaIds.length - 1) {
            return accumulator.concat({
                pessoaId: currentValue,
                amigoSecretoId: pessoaIds[currentIndex+1]
            })
        } else {
            return accumulator.concat({
                pessoaId: currentValue,
                amigoSecretoId: pessoaIds[0]
            })
        }
    }, [])

const findPessoaAndUpdateAmigoSecreto = async (sorteado) => { //eslint-disable-line
    const pessoaSalva = await Pessoa.findOneAndUpdate({
        _id: sorteado.pessoaId
    }, {
        $set: {
            amigoSecreto: sorteado.amigoSecretoId
        }
    })
    .populate('amigoSecreto')
    .exec()
    pessoasSalvas.push(pessoaSalva)
}
const salvarAmigosSecretos = async sorteados => {
    pessoasSalvas = []
    const promises = sorteados.map(findPessoaAndUpdateAmigoSecreto)
    await Promise.all(promises)
    return pessoasSalvas
}

module.exports = { embaralhar, sortear, salvarAmigosSecretos}
