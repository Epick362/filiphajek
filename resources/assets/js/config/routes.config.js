app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /404
    $urlRouterProvider.otherwise('/404');
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
    .state('app', {
        url: '',
        abstract: true,
        template: '<div ui-view=""></div>'
    })
    .state('index', {
        url: '/',
        parent: 'app',
        templateUrl: 'views/index.html',
        controller: 'IndexController',
        controllerAs: 'vm'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthController',
        controllerAs: 'vm'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthController',
        controllerAs: 'vm'
    })
    .state('404', {
        url: '/404',
        parent: 'app',
        templateUrl: 'views/404.html'
    });
});
