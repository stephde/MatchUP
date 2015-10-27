'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:SportsCtrl
 * @description
 * # SportsCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('HistoryCtrl', ["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.myHistoricGames = [{
        name: "Marvin",
        skill: "1",
        image: "images/members/marvin.jpg"
    }, {
        name: "Thomas",
        skill: "3",
        image: "images/members/thomas.jpg"
    }, {
        name: "Jonas",
        skill: "5",
        image: "images/members/jonas.jpg"
    }];
    
    $scope.addHistoricGame = function(data){
        $scope.myHistoricGames.push(data);
    }
    
  }]);