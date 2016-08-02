app.controller('mainController', [ 'user', '$rootScope', '$scope', 'payment', '$timeout', function(user, $rootScope, $scope, payment, $timeout) {

  user.getUsers();
  user.newUser();
  $rootScope.currentUser = user.currentUser();

  $scope.payments = payment.getPayments();
  $scope.newPayment = payment.newPayment;

  $scope.formSubmit = function(amount, cause) {
    $scope.newPayment(amount, cause);
    $scope.showPayMessage();
    $scope.payments = payment.getPayments();
    console.log(this.cause);
    this.cause = this.amount = '';
  };

  $scope.showPayMessage = function() {
    $scope.showSM = true;
    $timeout(function() {
      $scope.showSM = false;
    }, 2000);
  };


}]);
