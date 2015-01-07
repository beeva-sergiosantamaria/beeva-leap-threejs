'use strict';

/**
 * @ngdoc overview
 * @name pruebaApp
 * @description
 * # pruebaApp
 *
 * Main module of the application.
 */
angular
  .module('pruebaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'RenderController'
      })
      .when('/categorias', {
        templateUrl: 'views/categorias.html',
        controller: 'CategoriasCTRL'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

