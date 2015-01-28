'use strict';

/**
 * @ngdoc function
 * @name gogogoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gogogoApp
 */
angular.module('gogogoApp')
  .controller('MainCtrl', function ($scope, apiService, routesService, fileService ) {

    $scope.routes = fileService.getFile('data/routes.json')

  });
