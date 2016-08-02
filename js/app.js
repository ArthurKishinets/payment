var app = angular.module('neolent', ['ui.router']);

app.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/user");

  $stateProvider
    .state('payment', {
      url: '/payment',
      templateUrl: '../views/payment.html'
    })
    .state('alterPayment', {
      url: '/payments/:id',
      templateUrl: '../views/paymentsAlter.html',
      controller: 'paymentAlter'
    })
    .state('user', {
      url: '/user',
      templateUrl: '../views/userAlter.html',
      controller: 'userAlter'
    })
}]);
