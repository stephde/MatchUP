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
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
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
}).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });;