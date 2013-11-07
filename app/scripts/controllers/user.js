'use strict';

angular.module('userManagementApp')
  .controller('UserCtrl', function ($scope, User) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];

        $scope.genderOptions = {"0": 'Female', "1": 'Male'};
        $scope.predicate = 'Name';

        $scope.getUserList = function() {
            $scope.users = User.query();
        }

        var isChecked = false;
        $scope.checkAll = function() {
            isChecked = !isChecked;
            angular.forEach($scope.users, function(v, k) {
                v.IsChecked = isChecked;
            });
        }

        $scope.deleteUser = function() {
            var isConfirm = confirm('Are you sure?');
            if (!isConfirm) {
                return false;
            }
            var tmp = [];
            var userIds = [];
            angular.forEach($scope.users, function(v, k) {
                if (!v.IsChecked) {
                    tmp.push(v);
                } else {
                    userIds.push(v.UserID);
                }
            });

            $scope.users = tmp;

            // Delete from json file
            User.delete({userIds: userIds.join(',')});
        }

        $scope.openUserAddForm = function() {
            $scope.action = 'Create new';
            $scope.currentUser = {};
            $('#user-frm-modal').modal('show');
        }

        $scope.openUserEditForm = function(user) {
            $scope.action = 'Edit';
            $scope.currentUser = angular.copy(user);
            $scope.currentUser.Gender = $scope.currentUser.Gender + '';
            $('#user-frm-modal').modal('show');
        }

        $scope.save = function() {
            if ($scope.currentUser.UserID) {
                User.update($scope.currentUser, function(data) {
                    $scope.getUserList();
                });
            } else {
                $scope.currentUser.CreatedDate = new Date().toISOString();

                // Save to data json file
                User.create($scope.currentUser, function(data) {
                    $scope.currentUser.UserID = data[0][0];
                    $scope.users.unshift($scope.currentUser);
                });

            }

            $('#user-frm-modal').modal('hide');
        }
  });
