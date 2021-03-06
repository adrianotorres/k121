import * as angular from 'angular'

import App from './components/app.component'
import Root from './components/root.component'

import configuration from './home.configuration'
import routing from './home.routes'

export default angular.module('application.home', [
      'ui.router'
  ])

  .component(App.selector, App)
  .component(Root.selector, Root)

  .config(configuration)
  .config(routing)

  .name