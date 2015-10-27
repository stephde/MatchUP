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
    
    var id = 0;
    
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	
	$scope.markers = []
	
	$scope.goToLA = function() {
		$scope.markers.push({
		id: id++,
		coords: {latitude: 45, longitude: -73}
	})
	}
  }]);