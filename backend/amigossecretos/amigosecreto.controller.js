const amigoSecretoHelper = require('../helpers/AmigoSecreto')
const emailHelper = require('../helpers/Email')

async function create(req, res, _next) {
    const pessoaIds = amigoSecretoHelper.embaralhar(req.body.pessoaIds)
    const sorteados = amigoSecretoHelper.sortear(pessoaIds)
    const pessoas = await amigoSecretoHelper.salvarAmigosSecretos(sorteados)
    const emailSentInfos = await emailHelper.enviarEmails(pessoas)
    res.json({ pessoas, emailSentInfos })
}

module.exports = { create }