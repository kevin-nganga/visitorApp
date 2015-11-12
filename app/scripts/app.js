'use strict';

/**
 * @ngdoc overview
 * @name visitorApp
 * @description
 * # visitorApp
 *
 * Main module of the application.
 */
var app = angular
  .module('visitorApp', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state('login', {
        url:'/login',
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })


  });
