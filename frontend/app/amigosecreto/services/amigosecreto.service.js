export default class AmigoSecretoService {
  constructor($http) {
    this.$http = $http
  }

  static get selector() { return 'amigoSecretoService' }

  async sortear(pessoaIds) {
    return await this.$http.post(
      'http://localhost:4040/api/amigossecretos',
      { pessoaIds }
    )
  }
}
