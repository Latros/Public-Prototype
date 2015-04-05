(function () {
  'use strict';

  angular.module('Prototype')

  .directive('cardLayout', function () {
    return {
      scope: {
        cards: '=cards'
      },
      restrict: 'E',
      templateUrl: '../html/partials/card-layout.partial.html',
      link: function (scope, element, attributes) {
        var columns = {};

        console.log(element[0].querySelector('.card-layout')
          .offsetWidth);

        var calculateColumns = function () {

        };

        var placeCards = function () {

        };

        var buildColumns = function () {

        };
      }
    };
  })

  .directive('newsCard', function () {
    return {
      scope: {
        post: '=post'
      },
      restrict: 'E',
      templateUrl: '../html/partials/news-card.partial.html',
      link: function (scope, element, attributes) {}
    };
  })

  .directive('tweetCard', function () {
    return {
      scope: {
        tweet: '=tweet'
      },
      restrict: 'E',
      templateUrl: '../html/partials/tweet-card.partial.html',
      link: function (scope, element, attributes) {}
    };
  });

  // .directive('instagramCard', function () {
  //   return {
  //     scope: {
  //       post: '=post'
  //     },
  //     restrict: 'E',
  //     templateUrl: '../html/partials/blog-card.partial.html',
  //     link: function (scope, element, attributes) {}
  //   };
  // })

  // .directive('redditCard', function () {
  //   return {
  //     scope: {
  //       post: '=post'
  //     },
  //     restrict: 'E',
  //     templateUrl: '../html/partials/blog-card.partial.html',
  //     link: function (scope, element, attributes) {}
  //   };
  // })

  // .directive('youtubeCard', function () {
  //   return {
  //     scope: {
  //       post: '=post'
  //     },
  //     restrict: 'E',
  //     templateUrl: '../html/partials/blog-card.partial.html',
  //     link: function (scope, element, attributes) {}
  //   };
  // })

  // .directive('facebookCard', function () {
  //   return {
  //     scope: {
  //       post: '=post'
  //     },
  //     restrict: 'E',
  //     templateUrl: '../html/partials/blog-card.partial.html',
  //     link: function (scope, element, attributes) {}
  //   };
  // });

})();