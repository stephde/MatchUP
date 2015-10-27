'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('LoginCtrl', ["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.user = {
    	name: "John Doe",
    	password: "Password123"
    }
  }]);