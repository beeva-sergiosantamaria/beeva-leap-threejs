'use strict';

/**
 * @ngdoc function
 * @name pruebaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pruebaApp
 */
angular.module('pruebaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
