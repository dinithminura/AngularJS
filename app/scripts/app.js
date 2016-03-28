'use strict';

/**
 * @ngdoc overview
 * @name testwebApp
 * @description
 * # testwebApp
 *
 * Main module of the application.
 */
angular
  .module('testwebApp', [
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
              controller: 'HomeController',
              templateUrl: 'views/main.html',
              controllerAs: 'vm'
          })

          .when('/login', {
              controller: 'LoginController',
              templateUrl: 'views/login.html',
              controllerAs: 'vm'
          })

          .when('/register', {
              controller: 'RegisterController',
              templateUrl: 'views/register.html',
              controllerAs: 'vm'
          })

          .otherwise({ redirectTo: '/login' });

      run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
          function run($rootScope, $location, $cookieStore, $http) {
              // keep user logged in after page refresh
              $rootScope.globals = $cookieStore.get('globals') || {};
              if ($rootScope.globals.currentUser) {
                  $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
              }

              $rootScope.$on('$locationChangeStart', function (event, next, current) {
                  // redirect to login page if not logged in and trying to access a restricted page
                  var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
                  var loggedIn = $rootScope.globals.currentUser;
                  if (restrictedPage && !loggedIn) {
                      $location.path('/login');
                  }
              });
          }
  });
