describe('mainService', function () {

  beforeEach(function () {

    module('fruitShop');

    inject(function (mainService) {
      service = mainService;
    });

  });

  it('should return rocky\'s name', function () {
    expect(service.getName()).toBe('Rocky\'s Shop');
  });

});