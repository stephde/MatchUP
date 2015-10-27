'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:SportsCtrl
 * @description
 * # SportsCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('CurrentGamesCtrl', ["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
  }]);