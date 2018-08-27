const expressRouter = require('express').Router
const pessoasRoutes = require('./pessoas/pessoa.route')
const amigosSecretosRoutes = require('./amigossecretos/amigosecreto.route')

const router = expressRouter()

router.use('/pessoas', pessoasRoutes)
router.use('/amigossecretos', amigosSecretosRoutes)

module.exports = router
