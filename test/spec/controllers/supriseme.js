'use strict';

describe('Controller: SuprisemeCtrl', function () {

  // load the controller's module
  beforeEach(module('matchUpApp'));

  var SuprisemeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuprisemeCtrl = $controller('SuprisemeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SuprisemeCtrl.awesomeThings.length).toBe(3);
  });
});
