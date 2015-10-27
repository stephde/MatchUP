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
    'ngMaterial',
    'picardy.fontawesome',
    'uiGmapgoogle-maps'
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
      .when('/supriseme', {
        templateUrl: 'views/supriseme.html',
        controller: 'SuprisemeCtrl'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});