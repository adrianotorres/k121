const amigoSecretoHelper = require('../helpers/AmigoSecreto')

async function create(req, res, _next) {
    const pessoaIds = amigoSecretoHelper.embaralhar(req.body.pessoaIds)
    const sorteados = amigoSecretoHelper.sortear(pessoaIds)
    const pessoas = await amigoSecretoHelper.salvarAmigosSecretos(sorteados)
    res.json(pessoas)
}

module.exports = { create }