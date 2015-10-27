'use strict';

/**
 * @ngdoc overview
 * @name matchUpApp
 * @description
 * # matchUpApp
 *
 * Main module of the application.
 */
angular
  .module('matchUpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'main'
      })
      .when('/sports', {
        templateUrl: 'views/sports.html',
        controller: 'SportsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});
