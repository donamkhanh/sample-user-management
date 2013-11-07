'use strict';

describe('Controller: HellWorldCtrl', function () {

  // load the controller's module
  beforeEach(module('pushupTrackerApp'));

  var HellWorldCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HellWorldCtrl = $controller('HellWorldCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
