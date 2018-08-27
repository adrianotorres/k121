const expressRouter = require('express').Router
const controller = require('./pessoa.controller')

const router = expressRouter()

router.route('/')
  /** GET /api/pessoas - Busca todas pessoas */
  .get(controller.list)

  /** POST /api/pessoas - Cria nova pessoa */
  .post(controller.create)

router.route('/:pessoaId')
//   /** GET /api/pessoas/:pessoaId - Busca pessoa */
  .get(controller.get)

  /** PUT /api/pessoas/:pessoaId - Altera pessoa */
  .put(controller.update)

//   /** DELETE /api/pessoas/:pessoaId - Deleta pessoa */
  .delete(controller.remove)

router.param('pessoaId', controller.load)

module.exports = router
