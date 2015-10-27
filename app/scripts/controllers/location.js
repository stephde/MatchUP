'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('LocationCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }]);
  
  