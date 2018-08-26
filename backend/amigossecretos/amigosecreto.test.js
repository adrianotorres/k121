// const mongoose = require('mongoose')
// const request = require('supertest')
// const httpStatus = require('http-status')
// const chai = require('chai')
// const app = require('../../index')
// const Pessoa = require('../pessoas/pessoa.model')

// chai.config.includeStack = true

// /**
//  * root level hooks
//  */
// after((done) => {
//     // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
//     mongoose.models = {}
//     mongoose.modelSchemas = {}
//     mongoose.connection.close()
//     done()
// })

// describe('## Amigo Secreto APIs', () => {
//     let body = {
//         pessoaIds: ['5b824381b6e043004837e2ee',
//             '5b82436fb6e043004837e2ec',
//             '5b82438bb6e043004837e2f0',	
//             '5b824379b6e043004837e2ed']
//     }

//     describe('# POST /api/amigossecretos', () => {
//         it('deve embaralhar os valores', (done) => {
//             request(app)
//             .post('/api/amigossecretos')
//             .send(body)
//             .expect(httpStatus.OK)
//             .then((res) => {
//                 done()
//             })
//             .catch(done)
//         }).timeout(5000)
//     })
// })
