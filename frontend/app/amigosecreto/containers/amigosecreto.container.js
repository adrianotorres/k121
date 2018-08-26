import './amigosecreto.container.scss'

class AmigoSecretoController {

  constructor(amigoSecretoService, pessoaService, $scope) {
      this.amigoSecretoService = amigoSecretoService
      this.pessoaService = pessoaService
      this.cadastrando = false
      this._scope = $scope
  }

  $onInit() {
    this.listarPessoas()
  }

  async remover(id) {
    this.pessoas = await this.pessoaService.remover(id)
    this.listarPessoas()
  }

  async sortear() {
    const pessoaTemAmigoSecreto = this.pessoas.find( pessoa => pessoa.amigoSecreto)

    const confirmation = pessoaTemAmigoSecreto 
      ? `Deseja realizar um novo sorteio com ${this.pessoas.length} pessoas?`
      : `Deseja realizar um sorteio com ${this.pessoas.length} pessoas?`

    if ( window.confirm(confirmation) ) {
      this.pessoas = await this.amigoSecretoService.sortear(
        this.pessoas.map( pessoa => pessoa._id)
      )
      this.changeAlert(true, 'alert-success', `Sorteio realizado com sucesso, foram enviados emails para os participantes!`)
      this.listarPessoas()
    }
  }

  salvarPessoa(pessoa) {
    const failure = res => {
      this.changeAlert(true, 'alert-danger', (res.data || {}).message)
      this._scope.$apply()
    }
      
    if (pessoa._id) {
      this.pessoaService.alterar(pessoa)
      .then(() => {
        this.cadastrando = false
        this.changeAlert(true, 'alert-success', `Pessoa alterada com sucesso`)
        this.listarPessoas()
      })
      .catch(failure)
    } else {
      this.pessoaService.adicionar(pessoa)
      .then(() => {
        this.cadastrando = false
        this.changeAlert(true, 'alert-success', `Pessoa cadastrada com sucesso`)
        this.listarPessoas()
      })
      .catch(failure)
    }
  }

  listarPessoas() {
    this.pessoaService.listar()
    .then(res => {
      this.pessoas = res.data
      this._scope.$apply()
    })
    .catch(() => console.log('Erro ao buscar as pessoas cadastradas'))
  }

  async abrirPessoaForm(pessoa = { nome: '', email: ''}) {
    this.pessoa = pessoa
    this.cadastrando = true
    this.changeAlert()
  }

  changeAlert(show = false, type = '', message = '') {
    this.alert = { show, type, message }
  }
}

export default class AmigoSecretoContainer {
  static get selector() { return 'amigosecreto' }
  static get controller() { return AmigoSecretoController }
  static get template() { return require('./amigosecreto.container.html')}
}
