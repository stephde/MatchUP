'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('DashboardCtrl', function ($rootScope, $scope) {
  	$rootScope.username = $rootScope.username || 'Username';
  	$rootScope.sports = $rootScope.sports || ['Tennis', 'Handball'];
  	$scope.near = Math.floor((Math.random()*200)+1);
  });
