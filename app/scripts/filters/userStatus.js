'use strict';

angular.module('userManagementApp')
  .filter('userStatus', function () {
    return function (input) {
      if (input > 0) {
          return 'Active';
      }

      return 'Inactive';
    };
  });
