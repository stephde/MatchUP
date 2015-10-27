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
  	$rootScope.sports = $rootScope.sports || ['Tennis', 'Handball'];

    var someDate = new Date();
    someDate.setHours(someDate.getHours() + 2);
    someDate.setMinutes(0);
    someDate.setSeconds(0);

    $rootScope.myGames = $rootScope.myGames || [{"name":"Michael", "date":someDate.toLocaleString(), "image":"images/members/michael.jpg", "sportIcon":iconForSport("handball")}];

  	$scope.near = Math.floor((Math.random()*200)+1);
  });
