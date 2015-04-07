(function () {
  'use strict';

  angular.module('Prototype')
    .directive('newsCard', function () {
      return {
        scope: {},
        replace: true,
        restrict: 'E',
        templateUrl: '../html/partials/news-card.partial.html',
        link: function (scope, element, attributes) {
          scope.post = JSON.parse(decodeURIComponent(attributes.data));
        }
      };
    });

})();