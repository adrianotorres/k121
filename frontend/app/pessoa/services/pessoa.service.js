export default class PessoaService {
    constructor($http) {
      this.$http = $http
      this.API_HOST = process.env.API_HOST || process.env.API_URL+':'+process.env.API_PORT
    }
  
    static get selector() { return 'pessoaService' }
  
    async listar() {
      return await this.$http.get(
        this.API_HOST+'/api/pessoas',
      )
    }
  
    async adicionar(pessoa) {
      return await this.$http.post(
        this.API_HOST+'/api/pessoas',
        { pessoa }
      )
    }
  
    async alterar(pessoa) {
      return await this.$http.put(
        this.API_HOST+'/api/pessoas/${pessoa._id}',
        { pessoa }
      )
    }
  
    async remover(id) {
      return await this.$http.delete(
      this.API_HOST+'/api/pessoas/${id}'
      )
    }
    
  }
  