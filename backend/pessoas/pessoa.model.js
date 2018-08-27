const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

const schema = mongoose.Schema

/**
 * Schema para.
 *
 * @property {number} req.query.skip - Número que informa o início da busca.
 * @property {number} req.query.limit - Número que informa o limite de pessoas na busca.
 * @returns {Promise<Pessoa[]>}
*/
const PessoaSchema = schema({
    nome: {
        type: String,
        required: [true, 'O nome da pessoa não pode ser vazio'],
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'O email da pessoa não pode ser vazio'],
        validate: {
            validator: value =>
            /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value), // eslint-disable-line
            message: props => `${props.value} não é um email válido!`
        },
        unique: true
    },
    amigoSecreto: {
        type: schema.Types.ObjectId,
        ref: 'Pessoa'
    }
})

PessoaSchema.plugin(timestamps)

PessoaSchema.statics = {
  /**
   * Lista todas as pessoas em ordem descendente do createdAt.
   * @returns {Promise<Pessoa[]>}
  */
    list() {
        return this.find()
      .sort({ createdAt: -1 })
      .exec()
    }
}

module.exports = mongoose.model('Pessoa', PessoaSchema)
