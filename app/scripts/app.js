'use strict';

angular.module('userManagementApp', ['userServices'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
