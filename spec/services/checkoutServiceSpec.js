/* Apple: 20, Banana: 30, Citrus: 50, Durian: 100 */

describe('checkoutService', function () {

  beforeEach(function () {

    module('fruitShop');

    inject(function (checkoutService) {
      service = checkoutService;
    });

  });

  describe('one', function () {

    it('should return 1', function() {
      expect(service.one()).toBe(1);
    });

  });

});