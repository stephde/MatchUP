'use strict';

describe('Controller: SportsCtrl', function () {

  // load the controller's module
  beforeEach(module('matchUpApp'));

  var SportsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SportsCtrl = $controller('SportsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SportsCtrl.awesomeThings.length).toBe(3);
  });
});
