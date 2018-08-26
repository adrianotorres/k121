import * as angular from 'angular'

import PessoaForm from '../pessoa/components/pessoa-form/pessoa-form.component'
import PessoaList from '../pessoa/components/pessoa-list/pessoa-list.component'

import AmigoSecretoContainer from './containers/amigosecreto.container'

import AmigoSecretoService from './services/amigosecreto.service'
import PessoaService from '../pessoa/services/pessoa.service'

import routing from './amigosecreto.routes'

export default angular.module('application.amigosecreto', [
    'ui.router'
])

  .component(PessoaForm.selector, PessoaForm)
  .component(PessoaList.selector, PessoaList)
  .component(AmigoSecretoContainer.selector, AmigoSecretoContainer)

  .service(AmigoSecretoService.selector, AmigoSecretoService)
  .service(PessoaService.selector, PessoaService)

  .config(routing)

  .name
