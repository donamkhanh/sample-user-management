'use strict';

describe('Filter: userGender', function () {

  // load the filter's module
  beforeEach(module('userManagementApp'));

  // initialize a new instance of the filter before each test
  var userGender;
  beforeEach(inject(function ($filter) {
    userGender = $filter('userGender');
  }));

  it('should return the input prefixed with "userGender filter:"', function () {
    var text = 'angularjs';
    expect(userGender(text)).toBe('userGender filter: ' + text);
  });

});
