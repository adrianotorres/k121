import AmigoSecretoContainer from './containers/amigosecreto.container'

export default ($stateProvider) => {
    'ngInject'
    $stateProvider
    .state('amigosecreto', {
        parent: 'app',
        url: '/amigosecreto',
        component: AmigoSecretoContainer.selector
    })
}
