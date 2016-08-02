app.factory('payment', [ '$rootScope', function($rootScope) {

  function newPayment(amount, cause) {
    var payment = {}, payments = getPayments();
    payment.amount = amount;
    payment.cause = cause;
    payment.id = payments.length;
    payment.creator = $rootScope.currentUser;
    payments.push(payment);
    console.log('payment created!');
    console.log(payments);
    localStorage.payments = JSON.stringify( payments );
  }

  function getPayments() {
    if ( localStorage.payments == undefined ) {
      var payments = [];
    }
    else {
      var payments = JSON.parse( localStorage.payments );
    }
    console.log('returned value');
    console.log(payments);
    return payments;
  }

  function getPaymentById(id) {
    var payments = getPayments(), elem;
    for( var i = 0; i < payments.length; i++ ) {

      if( payments[i].id == id ) {
        elem = payments[i];
      }

    }
    return elem;
  }

  function alterPayment(id, newAmount, newCause) {
    var payments = getPayments();
    for (var i = 0; i < payments.length; i++) {
      if( payments[i].id == id ) {
        payments[i].amount = newAmount;
        payments[i].cause = newCause;
      }
    }
    localStorage.payments = JSON.stringify( payments );
    console.log('ALTERED PAYMENT');
    console.log(payments);
  }

  return {
    getPayments: getPayments,
    newPayment: newPayment,
    getPaymentById: getPaymentById,
    alterPayment: alterPayment
  }
}]);
