describe('mainCtrl', function () {

  beforeEach(function () {
    module('fruitShop');

    inject(function ($controller, $rootScope) {
      controller = $controller;
      rootScope = $rootScope;
      scope = $rootScope.$new();
    });

    controller('mainCtrl', {$scope: scope});
  });

  it('should get shop\'s name', function () {
    expect(scope.shopName).toBe('Rocky\'s Shop');
  });

});
