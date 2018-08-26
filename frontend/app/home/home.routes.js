import App from './components/app.component'

export default ($stateProvider, $urlRouterProvider) => {
    'ngInject'
    $stateProvider
    .state('app', {
        abstract: true,
        url: '/app',
        component: App.selector
    })

    $urlRouterProvider.otherwise('/app/amigosecreto')
}
