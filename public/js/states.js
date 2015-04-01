(function () {
  'use strict';

  angular.module('Prototype')
    .config(function ($stateProvider) {

      $stateProvider.state('index', {
        url: '/',
        templateUrl: '/html/pages/index.page.html',
        resolve: {
          post1: function () {
            return {
              title: '&quot;Don\'t quit your day job to be an artist&quot;, Justin Trudeau',
              shortTitle: '&quot;Don\'t quit your day job&nbsp;...&quot;',
              content: '<p>If Justin Trudeau flames out as Liberal leader, his postpolitical career could head in many directions...</p><p>But perhaps art isn\'t one of them.</p><p>Today (March 30), the Liberal Party of Canada sent an email to supporters with the subject line &quot;Gorgeous&quot;.</p><p>Inside, however, wasn\'t a photo of a daffodil or glacial lake, or even a Trudeau selfie. Just this &quot;Original artwork by Justin Trudeau&quot;.</p><div class="nested-image"><img src="http://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/images/15/03/jtart.jpg?itok=xxQtOcQu" alt="&quot;Canadian Liberty&quot; by Justin Trudeau."><span>&quot;Canadian Liberty&quot; by Justin Trudeau.</span></div><p>The drawing is titled (groan) &quot;Canadian Liberty&quot;, and the &quot;work in progress&quot; depicts the Canadian Museum for Human Rights, which opened to controversy last year in Winnipeg.</p><p>It\'s apparently a &quot;limited edition reward&quot; for donors to the party\'s latest fundraising campaign.</p><p>Another reward is a T-shirt labelling the wearer as &quot;Part of the change&quot;.</p>',
              shortContent: 'If Justin Trudeau flames out as Liberal leader, his postpolitical career could head in many directions...',
              sourceUrl: 'http://www.straight.com/blogra/420706/dont-quit-your-day-job-be-artist-justin-trudeau',
              sourceDomain: 'straight.com',
              primaryImageLarge: 'images/trudeau.jpg'
            };
          }
        },
        controller: function ($scope, post1) {
          $scope.post1 = post1;
        }
      });

    });
})();