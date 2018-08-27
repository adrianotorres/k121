const mongoose = require('mongoose')
const request = require('supertest')
const httpStatus = require('http-status')
const chai = require('chai')
const app = require('../../index')

const expect = chai.expect
chai.config.includeStack = true

/**
 * root level hooks
 */
after((done) => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {}
    mongoose.modelSchemas = {}
    mongoose.connection.close()
    done()
})

describe('## Pessoa APIs', () => {
    const body = {
        pessoa: {
            nome: 'Adriano',
            email: 'adriano.skilo@gmail.com'
        }
    }

    describe('# POST /api/pessoas', () => {
        it('should create a new pessoa', (done) => {
            request(app)
                .post('/api/pessoas')
                .send(body)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.nome).to.equal(body.pessoa.nome)
                    expect(res.body.email).to.equal(body.pessoa.email)
                    body.pessoa = res.body
                    done()
                })
                .catch(done)
        }).timeout(5000)
    })

    describe('# GET /api/pessoas/:pessoaId', () => {
        it('should get pessoa details', (done) => {
            request(app)
                .get(`/api/pessoas/${body.pessoa._id}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.nome).to.equal(body.pessoa.nome)
                    expect(res.body.email).to.equal(body.pessoa.email)
                    done()
                })
                .catch(done)
        }).timeout(5000)

        it('should report error with message - Not found, when pessoa does not exists', (done) => {
            request(app)
                .get('/api/pessoas/56c787ccc67fc16ccc1a5e92')
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Pessoa não encontrada!')
                    done()
                })
                .catch(done)
        }).timeout(5000)
    })

    describe('# PUT /api/pessoas/:pessoaId', () => {
        it('should update pessoa details', (done) => {
            body.pessoa.nome = 'Skilo'
            request(app)
                .put(`/api/pessoas/${body.pessoa._id}`)
                .send(body)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.nome).to.equal('Skilo')
                    expect(res.body.email).to.equal(body.pessoa.email)
                    done()
                })
                .catch(done)
        }).timeout(5000)
    })

    describe('# GET /api/pessoas/', () => {
        it('should get all pessoas', (done) => {
            request(app)
                .get('/api/pessoas')
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body).to.be.an('array')
                    done()
                })
                .catch(done)
        }).timeout(5000)

        it('should get all pessoas (with limit and skip)', (done) => {
            request(app)
                .get('/api/pessoas')
                .query({ limit: 10, skip: 1 })
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body).to.be.an('array')
                    done()
                })
                .catch(done)
        }).timeout(5000)
    })

    describe('# DELETE /api/pessoas/', () => {
        it('should delete pessoa', (done) => {
            request(app)
                .delete(`/api/pessoas/${body.pessoa._id}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.nome).to.equal('Skilo')
                    expect(res.body.email).to.equal(body.pessoa.email)
                    done()
                })
                .catch(done)
        }).timeout(5000)
    })
})
