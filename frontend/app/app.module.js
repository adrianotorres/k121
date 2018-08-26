import * as angular from 'angular'

import homeModule from './home/home.module'
import amigosecretoModule from './amigosecreto/amigosecreto.module'

export default angular.module('application', [
    homeModule,
    amigosecretoModule
  ])
  .name