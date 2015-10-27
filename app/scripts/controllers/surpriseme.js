'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:SuprisemeCtrl
 * @description
 * # SuprisemeCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('SurprisemeCtrl', ["$scope", "$mdToast", "$rootScope", function ($scope, $mdToast, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var last = {
        bottom: false,
        top: false,
        left: false,
        right: false
      };

    $scope.toastPosition = angular.extend({},last);
    $scope.getToastPosition = function() {
      sanitizePosition();
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };

    function sanitizePosition() {
      var current = $scope.toastPosition;
      if ( current.bottom && last.top ) current.top = false;
      if ( current.top && last.bottom ) current.bottom = false;
      if ( current.right && last.left ) current.left = false;
      if ( current.left && last.right ) current.right = false;
      last = angular.extend({},current);
    }

    $scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('Tennis match has been scheduled at ' + $scope.date.toLocaleString())
        .position($scope.getToastPosition())
        .hideDelay(3000)
    );
  };
    
    $scope.date = new Date();
    $scope.date.setHours($scope.date.getHours() + 2);
    $scope.date.setMinutes(0);
    $scope.date.setSeconds(0);
    
    $scope.closeNotification = function(accept){
      if (accept) {
        $scope.showSimpleToast()
        $rootScope.myGames = [{"name":"Tennis", "date":$scope.date.toLocaleString(), "image":"images/tennisgirl.jpg", "sportIcon":iconForSport("tennis")}].concat($rootScope.myGames);
      } else {
        $scope.match = $scope.matches[1]
      }
    	
    };

    $scope.matches = [{"sport":"Baseball", "image":"images/baseballguy.jpg"},{"sport":"Tennis","image":"images/tennisgirl.jpg"}];
    $scope.match = $scope.matches[0];
    
  }]);