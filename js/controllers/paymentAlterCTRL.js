app.controller('paymentAlter', [ '$stateParams', '$scope', 'payment', function($stateParams, $scope, payment) {
  $scope.id = $stateParams.id;
  $scope.alterPay = function(alterNumber, alterCause) {
    console.log(alterNumber);
    console.log(alterCause);
    payment.alterPayment($scope.id, alterNumber, alterCause);
    $scope.alterCause = $scope.alterNumber = "";
    $scope.$parent.payments = payment.getPayments();
  };
}]);
