(function () {
    'use strict';

    angular.module('Prototype')
        .config(function ($stateProvider) {

            $stateProvider.state('index', {
                url: '/',
                templateUrl: 'states/index/index.template.html',
                resolve: {
                    data: function () {
                        // news
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
                            'type': 'instagram',
                            'dateSubmitted': '14 hours ago',
                            'username': 'the_shakdiesel',
                            'profileUrl': 'https://instagram.com/the_shakdiesel/',
                            'content': 'Well that was fancy. Met my favorite archer <a href="#">@coltonlhaynes</a> <a href="#">#Arrow</a> <a href="#">#Colton</a> <a href="#">#speedy</a> <a href="#">#Roy</a> <a href="#">#Harper</a> <a href="#">#Face</a> <a href="#">#idol</a> <a href="#">#Megacon</a> <a href="#">#2015</a> <a href="#">#archie</a>',
                            'imageUrl': 'https://brew-randall.herokuapp.com/Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL2hwaG90b3MteGZhMS90NTEuMjg4NS0xNS9zMzA2eDMwNi9lMTUvMTEwODQ3MzJfNjU1MTA4MjQ3OTUyOTE0XzE3ODExMzY4MTRfbi5qcGc'
                        }, {
                            'type': 'instagram',
                            'dateSubmitted': '8 hours ago',
                            'username': 'dorvalaviation',
                            'profileUrl': 'https://instagram.com/dorvalaviation/',
                            'content': '<a href="#">#fly</a> <a href="#">#ready</a> <a href="#">#dorval</a> <a href="#">#Trudeau</a> <a href="#">#trip</a> <a href="#">#challenger</a> <a href="#">#jet</a> <a href="#">#montreal</a> <a href="#">#cessna</a> <a href="#">#school</a> <a href="#">#flying</a> <a href="#">#takeoff</a> <a href="#">#airport</a> <a href="#">#airplane</a> <a href="#">#private</a> <a href="#">#school</a> <a href="#">#fun</a> <a href="#">#spring</a> <a href="#">#warm</a> <a href="#">#sun</a> <a href="#">#clouds</a>',
                            'imageUrl': 'https://brew-randall.herokuapp.com/Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL2hwaG90b3MteGFmMS9sL3Q1MS4yODg1LTE1L3MzMDZ4MzA2L2UxNS8xMDkxNDM1NV8xNDY4MjE0OTgwMTM1MTkzXzEyOTgyOTA0OTlfbi5qcGc'
                        }, {
                            'type': 'instagram',
                            'dateSubmitted': '2 hours ago',
                            'username': 'nanceess',
                            'profileUrl': 'https://instagram.com/nanceess/',
                            'content': 'Passover and politics. It\'s deep. <a href="#">#justintrudeau</a> <a href="#">#passover</a> <a href="#">#canada</a> <a href="#">#cdnpoli</a> <a href="#">#longweekend</a> <a href="#">#happypassover</a>',
                            'imageUrl': 'https://brew-randall.herokuapp.com/Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL2hwaG90b3MteHBhMS90NTEuMjg4NS0xNS9zMzA2eDMwNi9lMTUvOTI0NzY3XzE2Mjg0NTM5OTQwMzM2NTdfNzI3NDg1MzAzX24uanBn'
                        }, {
                            'type': 'instagram',
                            'dateSubmitted': '3 days ago',
                            'username': 'milesdavidts',
                            'profileUrl': 'https://instagram.com/milesdavidts/',
                            'content': 'Not car-related but what a shame... <a href="#">#canada</a> <a href="#">#ottawa</a> <a href="#">#conservatives</a> <a href="#">#stephenharper</a> <a href="#">#cpc</a> <a href="#">#ndp</a> <a href="#">#liberals</a> <a href="#">#stopharper</a> <a href="#">#justintrudeau</a> <a href="#">#tommulcair</a>',
                            'imageUrl': 'https://brew-randall.herokuapp.com/Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL2hwaG90b3MteGFmMS90NTEuMjg4NS0xNS9zMzA2eDMwNi9lMTUvMTEwOTMxMDFfMTU5NjU1NzUyNzIyMjg5OF8xNzI3MjcxMDcyX24uanBn'
                        }, {
                            'type': 'instagram',
                            'dateSubmitted': '2 weeks ago',
                            'username': 'boomboombarrie',
                            'profileUrl': 'https://instagram.com/boomboombarrie/',
                            'content': '"This Guy!" JT is one hell of a person! <a href="#">#justintrudeau</a> <a href="#">#Cdnpoli</a> <a href="#">#heavesteve2015</a>',
                            'imageUrl': 'https://brew-randall.herokuapp.com/Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL2hwaG90b3MteGFmMS90NTEuMjg4NS0xNS9zMzA2eDMwNi9lMTUvMTEwMzI4MThfODYyOTU2MjMzNzQyNzYwXzU0Mjc4MDM2OV9uLmpwZw'
                        }, {
                            'type': 'reddit',
                            'dateSubmitted': '4 years ago',
                            'username': 'razzark666',
                            'profileUrl': 'http://www.reddit.com/user/razzark666',
                            'commentUrl': 'http://www.reddit.com/r/canada/comments/fygig/we_should_really_protest_this_harper_government/c1jlad6',
                            'postUrl': 'http://www.reddit.com/r/canada/comments/fygig/we_should_really_protest_this_harper_government/',
                            'content': 'The silver lining of the "Harper Government" thing is that he only besmirches his name when he does stuff now, not Canada\'s...'
                        }, {
                            'type': 'reddit',
                            'dateSubmitted': '1 years ago',
                            'username': 'Plonkys',
                            'profileUrl': 'http://www.reddit.com/user/Plonkys',
                            'commentUrl': 'http://www.reddit.com/r/CanadaPolitics/comments/1l111c/to_those_criticizing_justin_trudeau_for_smoking/cbwfeie',
                            'postUrl': 'http://www.reddit.com/r/CanadaPolitics/comments/1l111c/to_those_criticizing_justin_trudeau_for_smoking/',
                            'content': 'Doing drugs in general is what I think the problem is, but it is quite correct to be putting Trudeau and Ford together now, even though we know 100% Trudeau does drugs and we still don\'t know 100% if Ford did.'
                        }, {
                            'type': 'reddit',
                            'dateSubmitted': '3 months ago',
                            'username': 'Logical_Hare',
                            'profileUrl': 'http://www.reddit.com/user/Logical_Hare',
                            'commentUrl': 'http://www.reddit.com/r/canada/comments/27vw5b/justin_trudeau_says_abortion_not_up_to_male/ci4xw1d',
                            'postUrl': 'http://www.reddit.com/r/canada/comments/27vw5b/justin_trudeau_says_abortion_not_up_to_male/',
                            'content': 'I\'m in favour of abortions. On demand. The more the bloody merrier. I don\'t play this "good-girls-don\'t-abort" bullshit game that the media and many allegedly "pro-choice" politicians play. Real life isn\'t fucking \'Juno\'. If you\'re pro-choice, then you have to understand that sometimes abortion will be the right choice for a woman, no ifs ands or buts. If you\'re starting from the position that all abortions are regrettable, you tend to move very quickly into "women must be talked out of them", and then into "women can\'t be trusted to make their own decisions on these matters". This is the logic that leads to what you see in places like some of the states or South America: mandatory trans-vaginal ultrasounds, lie-filled "counselling", and ultimately criminalization of women for their pregnancy outcomes. As much as I love how Trudeau has staked out a strongly pro-choice position for his party, he needs to clear up exactly what the hell he means by his rhetoric, and fast.'
                        }, {
                            'type': 'reddit',
                            'dateSubmitted': '2 hours ago',
                            'username': 'Akesgeroth',
                            'profileUrl': 'http://www.reddit.com/user/Akesgeroth',
                            'commentUrl': 'http://www.reddit.com/r/canada/comments/27vw5b/justin_trudeau_says_abortion_not_up_to_male/ci5cfzh',
                            'postUrl': 'http://www.reddit.com/r/canada/comments/27vw5b/justin_trudeau_says_abortion_not_up_to_male/',
                            'content': 'Why is he talking about this? No one in any party has shown any intention of bringing this back to the table. Abortion isn\'t a political issue in Canada and I would love for Trudeau to stop trying to make it one.'
                        }, {
                            'type': 'reddit',
                            'dateSubmitted': '4 years ago',
                            'username': 'Gaaaaaaa',
                            'profileUrl': 'http://www.reddit.com/user/Gaaaaaaa',
                            'commentUrl': 'http://www.reddit.com/r/canada/comments/2gt7d1/liberal_leader_justin_trudeau_faced_with_an_open/ckmo9x5',
                            'postUrl': 'http://www.reddit.com/r/canada/comments/2gt7d1/liberal_leader_justin_trudeau_faced_with_an_open/',
                            'content': 'I\'m perfectly fine with Trudeau clearing old-school, right-wing religious ideologues out of the Liberal Party. In fact, it\'s one of the reasons I will probably vote for his party.'
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
                        }].shuffle();
                    }
                },
                controller: function ($scope, data) {
                    $scope.data = data;
                }
            });
        });

})();