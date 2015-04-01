(function () {
  'use strict';

  angular.module('Prototype')

  .directive('newsCard', function () {
    return {
      scope: {
        post: '=post'
      },
      restrict: 'E',
      templateUrl: '../html/partials/blog-card.partial.html',
      link: function (scope, element, attributes) {}
    };
  })

  .directive('tweetCard', function () {
    return {
      scope: {
        post: '=post'
      },
      restrict: 'E',
      templateUrl: '../html/partials/blog-card.partial.html',
      link: function (scope, element, attributes) {}
    };
  })

  .directive('instagramCard', function () {
    return {
      scope: {
        post: '=post'
      },
      restrict: 'E',
      templateUrl: '../html/partials/blog-card.partial.html',
      link: function (scope, element, attributes) {}
    };
  })

  .directive('redditCard', function () {
    return {
      scope: {
        post: '=post'
      },
      restrict: 'E',
      templateUrl: '../html/partials/blog-card.partial.html',
      link: function (scope, element, attributes) {}
    };
  })

  .directive('youtubeCard', function () {
    return {
      scope: {
        post: '=post'
      },
      restrict: 'E',
      templateUrl: '../html/partials/blog-card.partial.html',
      link: function (scope, element, attributes) {}
    };
  })

  .directive('facebookCard', function () {
    return {
      scope: {
        post: '=post'
      },
      restrict: 'E',
      templateUrl: '../html/partials/blog-card.partial.html',
      link: function (scope, element, attributes) {}
    };
  });

})();