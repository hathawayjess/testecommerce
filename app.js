angular.module('beer', ['ui-router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
  }),
  .state('admin', {
    url: '/admin',
    templateUrl: './views/admin.html'
  })

  $urlRouterProvider.otherwise('/');
})
