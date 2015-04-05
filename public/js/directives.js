(function () {
  'use strict';

  angular.module('Prototype')

  .directive('cardLayout', function ($compile) {
    return {
      scope: {
        cards: '=cards'
      },
      restrict: 'E',
      templateUrl: '../html/partials/card-layout.partial.html',
      link: function (scope, element, attributes) {
        scope.columnWidth = 500;
        scope.boardWidth = element[0].querySelector('.card-layout')
          .offsetWidth;
        scope.originalCards = _.clone(scope.cards);
        scope.el = element[0];
        scope.board = angular.element(element[0].querySelector('.card-layout'));
        scope.smallestColumn = undefined;
        scope.columns = [];

        scope.calculateColumns = function () {
          // Determine how many columns we should have by rounding to
          // the nearest integer of board width divided by column width
          scope.boardWidth = element[0].querySelector('.card-layout')
            .offsetWidth;
          console.log('Board width:', scope.boardWidth);
          console.log('Column width:', scope.columnWidth);
          console.log('Number of columns we can fit:', Math.round(scope.boardWidth / scope.columnWidth));
          return Math.round(scope.boardWidth / scope.columnWidth);
        };

        scope.buildColumns = function (numColumns) {
          for (var i = 0; i < numColumns; i++) {
            scope.columns.push({
              cards: 0,
              id: 'column_' + (i + 1)
            });
            scope.board.append('<div id="column_' + (i + 1) + '" style="width: ' + (100 / numColumns) + '%; display: inline-block; vertical-align: top; margin: 0; padding: 20px;"></div>');
          }
        };

        scope.placeCard = function (card) {
          _.each(scope.columns, function (col, index) {
            if (scope.smallestColumn === undefined || col.cards < scope.smallestColumn.cards)
              scope.smallestColumn = scope.columns[index];
          });
          var cardString = JSON.stringify(card);
          var cardEl = $compile('<' + card.type + '-card data="' + encodeURIComponent(cardString) + '"></' + card.type + '-card>')(scope);
          angular.element(scope.el.querySelector('#' + scope.smallestColumn.id))
            .append(cardEl);
          scope.smallestColumn.cards += 1;
        };

        scope.render = function () {
          scope.cards = [];
          scope.cards = _.clone(scope.originalCards);
          scope.board[0].innerHTML = '';
          console.log('Beginning render...');
          var numColumns = scope.calculateColumns();
          scope.buildColumns(numColumns);
          var l = scope.cards.length;
          for (var i = 0; i < l; i++) {
            scope.placeCard(scope.cards[0]);
            scope.cards.shift();
          }
        };

        var lazyRender = _.debounce(scope.render, 100);

        lazyRender();

        $(window)
          .resize(lazyRender);
      }
    };
  })

  .directive('tweetCard', function () {
    return {
      scope: {},
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
      restrict: 'E',
      templateUrl: '../html/partials/news-card.partial.html',
      link: function (scope, element, attributes) {
        scope.post = JSON.parse(decodeURIComponent(attributes.data));
      }
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