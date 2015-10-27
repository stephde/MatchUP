'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:SportsCtrl
 * @description
 * # SportsCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('SportsCtrl', ["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.mySports = [{
    	name: "",
    	skill: "1"
    }]
    
    $scope.addSport = function(){
    	$scope.mySports.push({})
    }
    
  }]);