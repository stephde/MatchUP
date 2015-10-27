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
  	$rootScope.username = $rootScope.username || 'Stephan';
  	$rootScope.sports = $rootScope.sports || [{name:'Tennis', skill:1}, {name:'Handball', skill:1}];
  	$scope.near = Math.floor((Math.random()*30)+40);
  });
