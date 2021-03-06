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
    
	$scope.map = { center: { latitude: 37.4475533, longitude: -122.1618798 }, zoom: 12 };
	
	$scope.markers = [{
		id: id++,
		coords: {latitude: 37.4475533, longitude: -122.1618798}
	}]
	
	$scope.circles = [{
                id: 1,
                center: $scope.markers[0].coords,
                radius: 5,
                stroke: {
                    color: '#FF0000',
                    weight: 2,
                    opacity: 0.8
                },
                fill: {
                    color: '#FF0000',
                    opacity: 0.35
                }
    }]
	
	$scope.goToLA = function() {
		$scope.markers = []
		$scope.markers.push({
			id: id++,
			coords: {latitude: 34.0500271, longitude: -118.1981123}
		})
		
		$scope.map = { center: { latitude: 34.0500271, longitude: -118.1981123 }, zoom: 12 };
		$scope.circles[0] = {
                id: 1,
                center: $scope.markers[0].coords,
                radius: 5,
                stroke: {
                    color: '#FF0000',
                    weight: 2,
                    opacity: 0.8
                },
                fill: {
                    color: '#FF0000',
                    opacity: 0.35
                }
    	}
	}
	
  }]);