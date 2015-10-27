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
    
    $scope.date = new Date()
    
    $scope.closeNotification = function(accept){
    	
    }
    
  }]);