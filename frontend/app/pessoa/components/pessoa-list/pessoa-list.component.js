import './pessoa-list.component.scss'

class PessoaListController {
  remover(pessoa) {
    this.pessoaRemovida({
      $event: {
          id: pessoa._id
      }
    })
  }
  alterar(pessoa) {
    this.selecionado({
      $event: {
          pessoa: pessoa
      }
    })
  }
}

export default class PessoaList {
  static get selector() { return 'pessoaList' }
  static get bindings() { return {
    pessoas: '<',
    pessoaRemovida: '&',
    selecionado: '&'
  }}
  static get controller() { return PessoaListController }
  static get template() { return require('./pessoa-list.component.html')
}
}
