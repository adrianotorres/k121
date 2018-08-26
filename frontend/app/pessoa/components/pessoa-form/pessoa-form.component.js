class PessoaFormController {

  salvar() {
    this.salva({
      $event: {
        pessoa: this.pessoa
      }
    })
  }

  cancelar() {
    this.cancelada({
      $event: {}
    })
  }
}

export default class PessoaForm {
  static get selector() { return 'pessoaForm' }
  static get template() { return require('./pessoa-form.component.html') }
  static get bindings() { return {
    salva: '&',
    cancelada: '&',
    pessoa: '<'
  }}
  static get controller() { return PessoaFormController }
}
