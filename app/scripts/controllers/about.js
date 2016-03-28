'use strict';

/**
 * @ngdoc function
 * @name testwebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testwebApp
 */
angular.module('testwebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
