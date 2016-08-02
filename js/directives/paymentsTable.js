app.directive('paymentsTable', ['$compile', '$rootScope', 'payment', '$location', function($compile, $rootScope, payment, $location) {
  return {

    replace: true,
    restrict: 'EACM',
    templateUrl: '../views/paymentTable.html',
    link: function(scope, element, attrs) {

      var payments = payment.getPayments(), sumPayments = 0;
      for( var i=0; i < payments.length; i++) {
        sumPayments += payments[i].amount;
      }
      console.log(payments.length);
      scope.sumPayments = sumPayments;
      scope.amountPay = payments.length;

      scope.alterPay = function(elem) {
        console.log(elem);
        var elem = payment.getPaymentById(elem);
        var newUrl = '/payments/' + elem.id;
        $location.path(newUrl);
      };
    }
  };
}]);
