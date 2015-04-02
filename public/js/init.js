(function () {
  'use strict';

  angular.module('Prototype', ['ui.router']);

  angular.module('Prototype')
    .run(function ($rootScope) {

      $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error('Error transitioning to state: \'' + toState.name + '\'...');
        console.error('Additional debugging:\n\n');
        console.error('-> toState:', toState);
        console.error('-> fromState:', fromState);
        console.error('-> toParams:', toParams);
        console.error('-> fromParams:', fromParams);
        console.error('-> error:', error);
        console.error('-> event:', event);
      });
    });

  angular.module('Prototype')
    .config(function ($urlRouterProvider, $sceProvider) {
      $urlRouterProvider.otherwise('/');
      $sceProvider.enabled(false);
    });
})();