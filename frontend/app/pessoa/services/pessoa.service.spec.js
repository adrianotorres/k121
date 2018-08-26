import * as angular from 'angular'
import 'angular-mocks'
import PessoaService from './pessoa.service'

describe('Amigo Secreto container', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .service('pessoaService', PessoaService)
    angular.mock.module('app')
  })

  it('should exist', angular.mock.inject((pessoaService) => {
    expect(pessoaService).toBeDefined()
  }))

  it('should generate an id when adding a new pessoa', angular.mock.inject((pessoaService) => {
    const pessoa = {
      nome: 'Adriano',
      email: 'adriano.skilo@gmail.com'
    }

    pessoaService.add(pessoa)

    expect(pessoaService.pessoas[1].id).toBe(2)
  }))

  it('should remove a pessoa by id', angular.mock.inject((pessoaService) => {
    pessoaService.remove(1)
    expect(pessoaService.contacts.length).toBe(0)
  }))
})
