app.controller('userAlter', [ '$scope', 'user', '$rootScope',  function($scope, user, $rootScope) {
  $scope.user = user.currentUser();
  console.log('userAlter');
  $scope.changeName = function(id, newName) {
    user.changeName(id, newName);
    $scope.user = user.currentUser();
    $rootScope.currentUser = user.currentUser();
    console.log($scope.user);
  };
}]);
