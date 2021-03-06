(function () {
  'use strict';

  angular.module('Prototype')

  .directive('cardLayout', function ($compile) {
    return {
      scope: {
        cards: '=cards'
      },
      replace: true,
      restrict: 'E',
      templateUrl: '../html/partials/card-layout.partial.html',
      link: function (scope, element, attributes) {
        scope.columnWidth = 300;
        scope.originalCards = _.clone(scope.cards);
        scope.board = angular.element(element[0]);

        scope.placeCard = function (card) {
          var cardString = JSON.stringify(card);
          var cardEl = $compile('<' + card.type + '-card data="' + encodeURIComponent(cardString) + '"></' + card.type + '-card>')(scope);
          angular.element(scope.board[0])
            .append(cardEl);
        };

        scope.render = function () {
          console.log('Beginning render...');
          scope.cards = _.clone(scope.originalCards);
          scope.board[0].innerHTML = '';

          var l = scope.cards.length;

          for (var i = 0; i < l; i++) {
            scope.placeCard(scope.cards[0]);
            scope.cards.shift();
          }
        };

        scope.render();

        setTimeout(function () {
          var msnry = new Masonry(scope.board[0], {
            itemSelector: '.eyesover-card',
            gutter: 30,
            columnWidth: scope.columnWidth
          });

          console.log(msnry);
        }, 2000);
      }
    };
  })

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
  })

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
  })

  .directive('instagramCard', function () {
    //   return {
    //     scope: {
    //       post: '=post'
    //     },
    //     restrict: 'E',
    //     templateUrl: '../html/partials/blog-card.partial.html',
    //     link: function (scope, element, attributes) {}
    //   };
  })

  .directive('redditCard', function () {
    //   return {
    //     scope: {
    //       post: '=post'
    //     },
    //     restrict: 'E',
    //     templateUrl: '../html/partials/blog-card.partial.html',
    //     link: function (scope, element, attributes) {}
    //   };
  })

  .directive('youtubeCard', function () {
    //   return {
    //     scope: {
    //       post: '=post'
    //     },
    //     restrict: 'E',
    //     templateUrl: '../html/partials/blog-card.partial.html',
    //     link: function (scope, element, attributes) {}
    //   };
  })

  .directive('facebookCard', function () {
    //   return {
    //     scope: {
    //       post: '=post'
    //     },
    //     restrict: 'E',
    //     templateUrl: '../html/partials/blog-card.partial.html',
    //     link: function (scope, element, attributes) {}
    //   };
  });

})();