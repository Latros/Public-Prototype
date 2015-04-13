(function () {
  'use strict';

  angular.module('Prototype')
    .directive('redditCard', function () {
      return {
        scope: {},
        replace: true,
        restrict: 'E',
        templateUrl: 'components/reddit-card/reddit-card.template.html',
        link: function (scope, element, attributes) {
          scope.post = JSON.parse(decodeURIComponent(attributes.data));
        }
      };
    });

})();