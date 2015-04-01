(function () {
  'use strict';

  angular.module('Prototype')
    .directive('BlogCard', function () {
      return {
        scope: {
          post: '=post'
        },
        restrict: 'E',
        templateUrl: '../html/partials/blog-card.partial.less',
        replace: true,
        link: function ($scope, element, attributes) {
          $scope.post = post;

          console.log('In directive link fn!');
        }
      };
    });

})();