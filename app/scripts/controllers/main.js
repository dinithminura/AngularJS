'use strict';

/**
 * @ngdoc function
 * @name testwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testwebApp
 */
angular.module('testwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
