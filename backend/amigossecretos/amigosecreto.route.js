const expressRouter = require('express').Router
const controller = require('./amigosecreto.controller')

const router = expressRouter()

router.route('/')
  /** POST /api/amigossecretos - Realiza o sorteio do amigo secreto */
  .post(controller.create)

module.exports = router
