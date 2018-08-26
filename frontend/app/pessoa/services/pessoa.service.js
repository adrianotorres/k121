export default class PessoaService {
    constructor($http) {
      this.$http = $http
    }
  
    static get selector() { return 'pessoaService' }
  
    async listar() {
      return await this.$http.get(
        'http://'+process.env.API_URL+':'+process.env.API_PORT+'/api/pessoas',
      )
    }
  
    async adicionar(pessoa) {
      return await this.$http.post(
        'http://'+process.env.API_URL+':'+process.env.API_PORT+'/api/pessoas',
        { pessoa }
      )
    }
  
    async alterar(pessoa) {
      return await this.$http.put(
        'http://'+process.env.API_URL+':'+process.env.API_PORT+'/api/pessoas/${pessoa._id}',
        { pessoa }
      )
    }
  
    async remover(id) {
      return await this.$http.delete(
      'http://'+process.env.API_URL+':'+process.env.API_PORT+'/api/pessoas/${id}'
      )
    }
    
  }
  