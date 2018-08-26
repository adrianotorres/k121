const express = require('express')
const controller = require('./amigosecreto.controller')

const router = express.Router()

router.route('/')
  /** POST /api/amigossecretos - Realiza o sorteio do amigo secreto */
  .post(controller.create)

module.exports = router
