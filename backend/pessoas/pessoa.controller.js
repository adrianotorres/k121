const httpStatus = require('http-status')
const Pessoa = require('./pessoa.model')

/**
 * Carrega a pessoa correspondente ao id na url e atribui para o request.
 * @property {number} id - Id da pessoa.
 */
function load(req, _res, next, id) {
    Pessoa.findById(id)
    .exec()
    .then((pessoa) => {
        if (pessoa) {
            req.pessoa = pessoa //eslint-disable-line
            return next()
        }
        return next({
            message: 'Pessoa não encontrada!',
            status: httpStatus.NOT_FOUND
        })
    })
}

/**
 * Retorna a pessoa correspondente ao id informado
 * @returns {Pessoa}
 */
function get(req, res) {
    res.json(req.pessoa)
}

/**
 * Cadastra uma nova pessoa
 * @property {string} req.body.pessoa.nome - O nome da pessoa.
 * @property {string} req.body.pessoa.email - O email da pessoa.
 * @returns {Pessoa}
 */
function create(req, res, next) {
    const pessoa = new Pessoa({
        nome: req.body.pessoa.nome,
        email: req.body.pessoa.email
    })

    pessoa.save()
        .then(pessoaSalva => res.json(pessoaSalva))
        .catch(e => next({
            message: e.message,
            status: httpStatus.BAD_REQUEST,
            errors: e.errors
        }))
}

/**
 * Alterar a pessoa correspondente ao id recebido
 * @property {string} req.body.pessoa.nome - O nome da pessoa.
 * @property {string} req.body.pessoa.email - O email da pessoa.
 * @returns {Pessoa}
 */
function update(req, res, next) {
    const pessoa = req.pessoa
    pessoa.nome = req.body.pessoa.nome
    pessoa.email = req.body.pessoa.email
    pessoa.save()
        .then(pessoaSalva => res.json(pessoaSalva))
        .catch(e => next({
            message: e.message,
            status: httpStatus.BAD_REQUEST,
            errors: e.errors
        }))
}

/**
 * Busca todas as pessoas cadastradas.
 * @property {number} req.query.skip - Número que informa o início da busca.
 * @property {number} req.query.limit - Número que informa o limite de pessoas na busca.
 * @returns {Pessoa[]}
 */
function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query
    Pessoa.list({ limit, skip })
        .then(pessoas => res.json(pessoas))
        .catch(e => next({
            message: e,
            status: httpStatus.INTERNAL_SERVER_ERROR
        }))
}

/**
 * Remove a pessoa.
 * @returns {Pessoa}
 */
function remove(req, res, next) {
    const pessoa = req.pessoa

    pessoa.remove()
        .then(pessoaRemovida => res.json(pessoaRemovida))
        .catch(e => next({
            message: e,
            status: httpStatus.BAD_REQUEST
        }))
}

module.exports = { load, get, create, update, list, remove }
