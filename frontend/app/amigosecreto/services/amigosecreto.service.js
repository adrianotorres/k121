export default class AmigoSecretoService {
  constructor($http) {
    this.$http = $http
    this.API_HOST = process.env.API_HOST || process.env.API_URL+':'+process.env.API_PORT
  }

  static get selector() { return 'amigoSecretoService' }

  async sortear(pessoaIds) {
    return await this.$http.post(
      'http://'+this.API_HOST+'/api/amigossecretos',
      { pessoaIds }
    )
  }
}
