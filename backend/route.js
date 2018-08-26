const express = require('express')
const pessoasRoutes = require('./pessoas/pessoa.route')
const amigosSecretosRoutes = require('./amigossecretos/amigosecreto.route')

const router = express.Router() //eslint-disable-line

router.use('/pessoas', pessoasRoutes)
router.use('/amigossecretos', amigosSecretosRoutes)

module.exports = router
