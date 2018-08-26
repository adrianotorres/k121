export default class AmigoSecretoService {
  constructor($http) {
    this.$http = $http
  }

  static get selector() { return 'amigoSecretoService' }

  async sortear(pessoaIds) {
    return await this.$http.post(
      'http://'+process.env.API_URL+':'+process.env.API_PORT+'/api/amigossecretos',
      { pessoaIds }
    )
  }
}
