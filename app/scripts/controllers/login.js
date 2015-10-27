'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('LoginCtrl', function ($scope, $location, $timeout) {
  	$scope.facebookClick = function() {
  		$scope.facebook = true;
  		$timeout(function() {$location.path('sports')},2000);
  	}
  });
