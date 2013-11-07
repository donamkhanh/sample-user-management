'use strict';

describe('Filter: userStatus', function () {

  // load the filter's module
  beforeEach(module('userManagementApp'));

  // initialize a new instance of the filter before each test
  var userStatus;
  beforeEach(inject(function ($filter) {
    userStatus = $filter('userStatus');
  }));

  it('should return the input prefixed with "userStatus filter:"', function () {
    var text = 'angularjs';
    expect(userStatus(text)).toBe('userStatus filter: ' + text);
  });

});
