'use strict';

var API_URL = 'http://192.168.1.124/sample-user-management/api/index.php';
var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('User', ['$resource', '$http',
    function($resource, $http){
        return $resource(API_URL, {}, {
            query: {method:'GET', params: {userId: '@userId'}, isArray: true},
            create: {method:'POST', isArray: true},
            update: {method:'PUT', isArray: true},
            delete: {method:'DELETE', params:{userIds: '@userIds'}}
        });
    }]);