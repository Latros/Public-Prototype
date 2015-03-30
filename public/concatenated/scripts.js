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
    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    });
})();

// --------- Next import... ---------

(function () {
  'use strict';

  console.log('Testing again');

})();

// --------- Next import... ---------

(function () {
  'use strict';

  angular.module('Prototype')
    .factory('ThingModel', function () {

      function thing(Data) {
        if (Data) this.build(Data);
      }

      thing.prototype = {

        build: function (Data) {
          angular.extend(this, Data);
        }

      };

      return thing;
    });
})();

// --------- Next import... ---------

(function () {
  'use strict';

  angular.module('Prototype')
    .service('StateDebugListener', function () {
      return {

        name: function () {}

      };
    });
})();

// --------- Next import... ---------

(function () {
  'use strict';

  angular.module('Prototype')
    .config(function ($stateProvider) {

      $stateProvider.state('index', {
        url: '/',
        templateUrl: '/html/pages/index.page.html',
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