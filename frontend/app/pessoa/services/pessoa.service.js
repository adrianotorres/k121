export default class PessoaService {
    constructor($http) {
      this.$http = $http
    }
  
    static get selector() { return 'pessoaService' }
  
    async listar() {
      return await this.$http.get(
        'http://localhost:4040/api/pessoas'
      )
    }
  
    async adicionar(pessoa) {
      return await this.$http.post(
        'http://localhost:4040/api/pessoas',
        { pessoa }
      )
    }
  
    async alterar(pessoa) {
      return await this.$http.put(
        `http://localhost:4040/api/pessoas/${pessoa._id}`,
        { pessoa }
      )
    }
  
    async remover(id) {
      return await this.$http.delete(
      `http://localhost:4040/api/pessoas/${id}`
      )
    }
    
  }
  