(function () {
  'use strict';

  angular.module('Prototype')
    .config(function ($stateProvider) {

      $stateProvider.state('index', {
        url: '/',
        templateUrl: '/templates/index.template.html',
        resolve: {
          thing: function () {
            return true;
          }
        },
        controller: function ($scope, thing) {
          $scope.thing = thing;
        }
      });

    });
})();