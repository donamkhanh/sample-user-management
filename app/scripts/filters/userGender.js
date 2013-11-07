'use strict';

angular.module('userManagementApp')
  .filter('userGender', function () {
    return function (input) {
        if (input == 1) {
            return 'Male';
        }

        return 'Female';
    };
  });
