const amigoSecretoHelper = require('../helpers/AmigoSecreto')
const emailHelper = require('../helpers/Email')
const Pessoa = require('../pessoas/pessoa.model')

async function create(req, res, _next) {
    const pessoaIds = amigoSecretoHelper.embaralhar(req.body.pessoaIds)
    const sorteados = amigoSecretoHelper.sortear(pessoaIds)
    await amigoSecretoHelper.salvarAmigosSecretos(sorteados)
    const pessoas = await Pessoa.find({}).populate('amigoSecreto').exec()
    const emailSentInfos = await emailHelper.enviarEmails(pessoas)
    res.json({ pessoas, emailSentInfos })
}

module.exports = { create }