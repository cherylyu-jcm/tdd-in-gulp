angular.module('fruitShop').controller('mainCtrl', function ($scope, mainService) {

  $scope.shopName = mainService.getName();
  console.log('Welcome to ' + $scope.shopName);

});
