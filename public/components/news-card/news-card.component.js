(function () {
  'use strict';

  angular.module('Prototype')
    .directive('newsCard', function () {
      return {
        scope: {},
        replace: true,
        restrict: 'E',
        templateUrl: 'components/news-card/news-card.template.html',
        link: function (scope, element, attributes) {
          scope.post = JSON.parse(decodeURIComponent(attributes.data));
        }
      };
    });

})();