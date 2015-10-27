'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:SuprisemeCtrl
 * @description
 * # SuprisemeCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('SuprisemeCtrl', ["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.date = new Date();
    
    $scope.closeNotification = function(accept){
    	$scope.match = $scope.matches[1]
    };

    $scope.matches = [{"sport":"Baseball", "image":"images/baseballguy.jpg"},{"sport":"Tennis","image":"images/tennisgirl.jpg"}];
    $scope.match = $scope.matches[0];
    
  }]);