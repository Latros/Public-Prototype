(function () {
  'use strict';

  angular.module('Prototype')
    .config(function ($stateProvider) {

      $stateProvider.state('index', {
        url: '/',
        templateUrl: '/html/pages/index.page.html',
        resolve: {
          tweets: function () {
            return [{
              'type': 'news',
              'title': '&quot;Don\'t quit your day job to be an artist&quot;, Justin Trudeau',
              'shortTitle': '&quot;Don\'t quit your day job&nbsp;...&quot;',
              'content': '<p>If Justin Trudeau flames out as Liberal leader, his postpolitical career could head in many directions...</p><p>But perhaps art isn\'t one of them.</p><p>Today (March 30), the Liberal Party of Canada sent an email to supporters with the subject line &quot;Gorgeous&quot;.</p><p>Inside, however, wasn\'t a photo of a daffodil or glacial lake, or even a Trudeau selfie. Just this &quot;Original artwork by Justin Trudeau&quot;.</p><div class="nested-image"><img src="http://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/images/15/03/jtart.jpg?itok=xxQtOcQu" alt="&quot;Canadian Liberty&quot; by Justin Trudeau."><span>&quot;Canadian Liberty&quot; by Justin Trudeau.</span></div><p>The drawing is titled (groan) &quot;Canadian Liberty&quot;, and the &quot;work in progress&quot; depicts the Canadian Museum for Human Rights, which opened to controversy last year in Winnipeg.</p><p>It\'s apparently a &quot;limited edition reward&quot; for donors to the party\'s latest fundraising campaign.</p><p>Another reward is a T-shirt labelling the wearer as &quot;Part of the change&quot;.</p>',
              'shortContent': 'If Justin Trudeau flames out as Liberal leader, his postpolitical career could head in many directions...',
              'sourceUrl': 'http://www.straight.com/blogra/420706/dont-quit-your-day-job-be-artist-justin-trudeau',
              'sourceDomain': 'straight.com',
              'primaryImageLarge': 'images/trudeau.jpg'
            }, {
              'type': 'tweet',
              'username': 'Esperanza Lester',
              'handle': 'Leticia_Calderon',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 30 1992, 1:27 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/502308558986170370/V2Wf0_Z5_normal.jpeg',
              'id': '551d972c12f223c084153a0b'
            }, {
              'type': 'tweet',
              'username': 'Salas Rush',
              'handle': 'Gilbert_Rowland',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 22 1984, 1:57 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/511272592737460225/pJ-MXDDs_normal.jpeg',
              'id': '551d972c636897fe2a694786'
            }, {
              'type': 'tweet',
              'username': 'Prince Mccarty',
              'handle': 'Irma_Schneider',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 23 2011, 1:39 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/416688351383527424/cT77T65k_normal.png',
              'id': '551d972c3d83023ba1cb1680'
            }, {
              'type': 'tweet',
              'username': 'Shelly Melton',
              'handle': 'Perez_Mcclure',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 26 2001, 1:05 PM',
              'profileImageUrl': 'https://brew-randall.herokuapp.com/Ly9pZ2Nkbi1waG90b3MtYi1hLmFrYW1haWhkLm5ldC9ocGhvdG9zLWFrLXhhZjEvdDUxLjI4ODUtMTkvMTEwMjQzMjZfODE3NzUxNTQ4Mjk0ODMzXzE4MzQ4ODMwMTRfYS5qcGc=',
              'id': '551d972c9011c9238464b087'
            }, {
              'type': 'tweet',
              'username': 'Ursula Underwood',
              'handle': 'Mullen_Colon',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 25 1996, 1:17 PM',
              'profileImageUrl': 'https://distillery.s3.amazonaws.com/profiles/profile_1059316154_75sq_1396219605.jpg',
              'id': '551d972ce5563a89a0cdd0f9'
            }, {
              'type': 'tweet',
              'username': 'Torres Cantrell',
              'handle': 'Katy_Sampson',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 22 1981, 1:41 PM',
              'profileImageUrl': 'https://brew-randall.herokuapp.com/Ly9pZ2Nkbi1waG90b3MtYi1hLmFrYW1haWhkLm5ldC9ocGhvdG9zLWFrLXhhZjEvdDUxLjI4ODUtMTkvMTEwODUxMzBfMTU2Nzc4NzUwNjgxOTgwMV8zNzkzMDE0MTNfYS5qcGc=',
              'id': '551d972c527cdb55e41a8349'
            }, {
              'type': 'tweet',
              'username': 'Copeland Crawford',
              'handle': 'Smith_Blackburn',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 14 1976, 1:05 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/2395036349/Kara_wind_small_normal.jpg',
              'id': '551d972c829c5e1ef00da6f0'
            }, {
              'type': 'tweet',
              'username': 'Ines Stanton',
              'handle': 'Wilder_Huffman',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 15 2013, 1:29 PM',
              'profileImageUrl': 'https://brew-randall.herokuapp.com/Ly9pZ2Nkbi1waG90b3MtYS1hLmFrYW1haWhkLm5ldC9ocGhvdG9zLWFrLXhwYTEvdDUxLjI4ODUtMTkvMTA3MjUwNzBfMTU0ODgyMTcxNTM5MjA1Nl81OTk4MjExMDVfYS5qcGc=',
              'id': '551d972c854939bef109a558'
            }, {
              'type': 'tweet',
              'username': 'Cobb Mathews',
              'handle': 'Dixon_Aguirre',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 29 2009, 1:22 PM',
              'profileImageUrl': 'https://brew-randall.herokuapp.com/Ly9pZ2Nkbi1waG90b3MtaC1hLmFrYW1haWhkLm5ldC9ocGhvdG9zLWFrLXhhcDEvdDUxLjI4ODUtMTkvMTA3MzE5MjFfMzgzMDYzNjA1MTgzMzUxXzE0MDA4ODA5ODFfYS5qcGc=',
              'id': '551d972c8d1e297cf3b7dc15'
            }, {
              'type': 'tweet',
              'username': 'Cain Bates',
              'handle': 'Burns_Pacheco',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 4 2009, 1:49 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/511272592737460225/pJ-MXDDs_normal.jpeg',
              'id': '551d972c7d5fa5c381c02cdd'
            }, {
              'type': 'tweet',
              'username': 'Audra Sutton',
              'handle': 'Maureen_Snyder',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 15 1993, 1:07 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/576479233549058048/lCGBGrMI_normal.png',
              'id': '551d972c60df9fab01696f96'
            }, {
              'type': 'tweet',
              'username': 'Jacquelyn Acosta',
              'handle': 'Shana_Joseph',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 31 2010, 1:03 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/564441055794577408/lrTN3Pzf_normal.jpeg',
              'id': '551d972c36afdbe012450788'
            }, {
              'type': 'tweet',
              'username': 'Hayes Bennett',
              'handle': 'Mindy_Weber',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 2 1976, 1:41 PM',
              'profileImageUrl': 'https://distillery.s3.amazonaws.com/profiles/profile_1826080_75sq_1375739820.jpg',
              'id': '551d972cfac74e09b4543b4a'
            }, {
              'type': 'tweet',
              'username': 'Davenport Petty',
              'handle': 'Kelly_Morris',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 16 1980, 1:52 PM',
              'profileImageUrl': 'https://distillery.s3.amazonaws.com/profiles/profile_246771142_75sq_1391824375.jpg',
              'id': '551d972c8e3aaf019d75d736'
            }, {
              'type': 'tweet',
              'username': 'Vazquez Herman',
              'handle': 'Ernestine_Vazquez',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 4 2002, 1:31 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/2218287479/JRcasualcropped-H_S._normal.jpg',
              'id': '551d972c9bba926b32ae0afc'
            }, {
              'type': 'tweet',
              'username': 'Harmon Porter',
              'handle': 'Vanessa_Cabrera',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 12 1991, 1:20 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/567124487226028032/ONNVkS2q_normal.jpeg',
              'id': '551d972c2bcb621d37781a3c'
            }, {
              'type': 'tweet',
              'username': 'Angelita Ramirez',
              'handle': 'Sutton_Barrett',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 5 1983, 1:19 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/2907827429/31c29380d116cc59303646543144a54b_normal.jpeg',
              'id': '551d972cfadd4819bec9fdc1'
            }, {
              'type': 'tweet',
              'username': 'Juana Mcbride',
              'handle': 'Diana_Garcia',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 11 2006, 1:10 PM',
              'profileImageUrl': 'https://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png',
              'id': '551d972c96be325d98874629'
            }, {
              'type': 'tweet',
              'username': 'Soto Patel',
              'handle': 'Jenny_Jordan',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 1 1978, 1:42 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/458704423049371648/0856D10S_normal.jpeg',
              'id': '551d972ca8308f45ca829cfa'
            }, {
              'type': 'tweet',
              'username': 'Millicent Mayo',
              'handle': 'Vasquez_Castaneda',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 5 1995, 1:34 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/574425204052520960/TMrAL6m4_normal.jpeg',
              'id': '551d972c691435773054942a'
            }, {
              'type': 'tweet',
              'username': 'Sanders Sanchez',
              'handle': 'Dorsey_Ellis',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 8 2015, 1:13 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/3364788046/5b412087415da6aea7325da4b0b303d6_normal.jpeg',
              'id': '551d972c6b256406279b0808'
            }, {
              'type': 'tweet',
              'username': 'Tania Booth',
              'handle': 'Castaneda_English',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 16 1977, 1:28 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/1823161173/6865517847_200f794380_z_normal.jpg',
              'id': '551d972c34f72682a22f55a2'
            }, {
              'type': 'tweet',
              'username': 'Nunez Cooper',
              'handle': 'Lindsay_Landry',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 19 1983, 1:26 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/513141872563220481/3wztlDDt_normal.png',
              'id': '551d972cafdf592c63ee92d2'
            }, {
              'type': 'tweet',
              'username': 'Lowe Gilmore',
              'handle': 'Marcella_Dawson',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 10 1989, 1:47 PM',
              'profileImageUrl': 'https://pbs.twimg.com/profile_images/570848144103985152/cPnTyeqm_normal.jpeg',
              'id': '551d972cfe3d2cf0e03514e1'
            }, {
              'type': 'tweet',
              'username': 'Joann Kirkland',
              'handle': 'Queen_Mcconnell',
              'content': '<a target="_blank" href="https://twitter.com/ledauphin604">@ledauphin604</a> <a target="_blank" href="https://twitter.com/mapaquet">@mapaquet</a> <a target="_blank" href="https://twitter.com/hashtag/Trudeau?src=hash">#Trudeau</a> père ne rêvait qu\'à un trip d\'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare',
              'dateSubmitted': 'April 16 1984, 1:32 PM',
              'profileImageUrl': 'https://distillery.s3.amazonaws.com/profiles/profile_15549182_75sq_1380368784.jpg',
              'id': '551d972c2ab23e9804236bc5'
            }];
          },
          post: function () {
            return;
          }
        },
        controller: function ($scope, tweets, post) {
          $scope.post = post;
          $scope.tweets = tweets;
        }
      });
    });

})();