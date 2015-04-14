(function () {
  'use strict';

  angular.module('Prototype')
    .directive('cardLayout', function ($timeout) {
      return {
        scope: {
          cards: '=cards'
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'components/card-layout/card-layout.template.html',
        link: function (scope, element, attributes) {
          scope.columnWidth = 400;

          $timeout(function () {
            var msnry = new Masonry(angular.element(element[0])[0], {
              itemSelector: '.eyesover-card',
              gutter: 30,
              columnWidth: scope.columnWidth
            });
          }, 1000);
        }
      };
    });

})();