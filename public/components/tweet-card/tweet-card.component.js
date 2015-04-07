(function () {
  'use strict';

  angular.module('Prototype')
    .directive('tweetCard', function () {
      return {
        scope: {},
        replace: true,
        restrict: 'E',
        templateUrl: '../html/partials/tweet-card.partial.html',
        link: function (scope, element, attributes) {
          scope.tweet = JSON.parse(decodeURIComponent(attributes.data));
        }
      };
    });

})();