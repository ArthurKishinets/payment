app.directive('mysearch',[ 'payment', function(payment) {
  return {
    retrict: 'EACM',
    link: function(scope, element, attrs) {
      console.log('search ------------');
      console.log(scope.payments);
      scope.myOptions = scope.payments;
    },
    templateUrl: '../views/search.html'
  }
}]);
