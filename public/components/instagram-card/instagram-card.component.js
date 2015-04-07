(function () {
  'use strict';

  angular.module('Prototype')
    .directive('instagramCard', function () {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: 'components/instagram-card/instagram-card.template.html',
        link: function (scope, element, attributes) {
          scope.gram = JSON.parse(decodeURIComponent(attributes.data));
        }
      };
    });

})();