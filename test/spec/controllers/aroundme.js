'use strict';

describe('Controller: AroundmeCtrl', function () {

  // load the controller's module
  beforeEach(module('matchUpApp'));

  var AroundmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AroundmeCtrl = $controller('AroundmeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AroundmeCtrl.awesomeThings.length).toBe(3);
  });
});
