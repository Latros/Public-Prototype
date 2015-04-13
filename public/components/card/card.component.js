(function () {
  'use strict';

  angular.module('Prototype')
    .directive('card', function ($compile, $timeout) {
      return {
        scope: {
          card: '=data'
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'components/card/card.template.html',
        link: function (scope, element, attributes) {
          console.log('asfd');
          scope.html = angular.element(element[0]);
          var cardString = JSON.stringify(scope.card);
          var cardEl = $compile('<' + scope.card.type + '-card data="' + encodeURIComponent(cardString) + '"></' + scope.card.type + '-card>')(scope);
          angular.element(scope.board[0])
            .append(cardEl);
        }
      };
    });

})();