'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('LoginCtrl', function ($scope, $location, $timeout, $rootScope) {
  	$scope.facebookClick = function() {
  		$scope.facebook = true;
  		$rootScope.sports = [{
	    	name: "Tennis",
	    	skill: "3"
	    }];
  		$timeout(function() {$location.path('sports')},2000);
  	}
  });
