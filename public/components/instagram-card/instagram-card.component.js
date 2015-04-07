(function () {
  'use strict';

  angular.module('Prototype')
    .directive('instagramCard', function () {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '../html/partials/instagram-card.partial.html',
        link: function (scope, element, attributes) {
          scope.gram = JSON.parse(decodeURIComponent(attributes.data));
        }
      };
    });

})();