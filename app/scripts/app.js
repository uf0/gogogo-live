'use strict';

/**
 * @ngdoc overview
 * @name gogogoApp
 * @description
 * # gogogoApp
 *
 * Main module of the application.
 */
angular
  .module('gogogoApp', [
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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          routes : function (fileService) {
            return fileService.getFile('data/routes.json');
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
