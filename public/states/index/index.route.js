(function () {
  'use strict';

  angular.module('Prototype')
    .config(function ($stateProvider) {

      $stateProvider.state('index', {
        url: '/',
        templateUrl: 'states/index/index.template.html',
        resolve: {
          data: function () {
            var data = [{
              "type": "facebook",
              "dateSubmitted": "3 hours ago",
              "submitter": "Laura Rachel Fraser",
              "profileUrl": "https://www.facebook.com/Ciiakap",
              "content": "Poor Harper says it has to do with politics! He still hasn't figured it out the people have will and power as well. Indigenous Nations have rights to their laws and lands. How sad it is to be a duty bearer. <a href=\"#\">#CROWNHONOR</a> <a href=\"#\">#‎NATIONTONATION‬</a> ‪<a href=\"#\">#‎UNDRIP‬</a> Do you think Liberals will be aware of this or will they sit on old ideas of colonization? ‪<a href=\"#\">#‎Trudeau‬</a>"
            }, {
              "type": "instagram",
              "dateSubmitted": "8 hours ago",
              "username": "dorvalaviation",
              "profileUrl": "https://instagram.com/dorvalaviation/",
              "content": "<a href=\"#\">#fly</a> <a href=\"#\">#ready</a> <a href=\"#\">#dorval</a> <a href=\"#\">#Trudeau</a> <a href=\"#\">#trip</a> <a href=\"#\">#challenger</a> <a href=\"#\">#jet</a> <a href=\"#\">#montreal</a> <a href=\"#\">#cessna</a> <a href=\"#\">#school</a> <a href=\"#\">#flying</a> <a href=\"#\">#takeoff</a> <a href=\"#\">#airport</a> <a href=\"#\">#airplane</a> <a href=\"#\">#private</a> <a href=\"#\">#school</a> <a href=\"#\">#fun</a> <a href=\"#\">#spring</a> <a href=\"#\">#warm</a> <a href=\"#\">#sun</a> <a href=\"#\">#clouds</a>",
              "imageUrl": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/11008280_359697617548347_2000174723_n.jpg"
            }, {
              "type": "tweet",
              "username": "Shelly Melton",
              "handle": "Perez_Mcclure",
              "content": "Perhaps Harper has such a visceral hatred of Pierre Trudeau because he knows his own legacy will be bleak & dishonorable. <a href=\"#\">#cdnpoli</a> <a href=\"#\">#onpoli</a>",
              "dateSubmitted": "April 26 2001, 1:05 PM",
              "profileImageUrl": "https://pbs.twimg.com/profile_images/550841435831173120/fSk-hlgT_bigger.jpeg",
              "id": "551d972c9011c9238464b087"
            }, {
              "type": "news",
              "title": "&quot;Don't quit your day job to be an artist&quot;, Justin Trudeau",
              "shortTitle": "&quot;Don't quit your day job&nbsp;...&quot;",
              "content": "<p>If Justin Trudeau flames out as Liberal leader, his postpolitical career could head in many directions...</p><p>But perhaps art isn't one of them.</p><p>Today (March 30), the Liberal Party of Canada sent an email to supporters with the subject line &quot;Gorgeous&quot;.</p><p>Inside, however, wasn't a photo of a daffodil or glacial lake, or even a Trudeau selfie. Just this &quot;Original artwork by Justin Trudeau&quot;.</p><div class=\"nested-image\"><img src=\"http://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/images/15/03/jtart.jpg?itok=xxQtOcQu\" alt=\"&quot;Canadian Liberty&quot; by Justin Trudeau.\"><span>&quot;Canadian Liberty&quot; by Justin Trudeau.</span></div><p>The drawing is titled (groan) &quot;Canadian Liberty&quot;, and the &quot;work in progress&quot; depicts the Canadian Museum for Human Rights, which opened to controversy last year in Winnipeg.</p><p>It's apparently a &quot;limited edition reward&quot; for donors to the party's latest fundraising campaign.</p><p>Another reward is a T-shirt labelling the wearer as &quot;Part of the change&quot;.</p>",
              "shortContent": "If Justin Trudeau flames out as Liberal leader, his postpolitical career could head in many directions...",
              "sourceUrl": "http://www.straight.com/blogra/420706/dont-quit-your-day-job-be-artist-justin-trudeau",
              "sourceDomain": "straight.com",
              "primaryImageLarge": "images/trudeau.jpg"
            }, {
              "type": "instagram",
              "dateSubmitted": "2 weeks ago",
              "username": "boomboombarrie",
              "profileUrl": "https://instagram.com/boomboombarrie/",
              "content": "\"This Guy!\" JT is one hell of a person! <a href=\"#\">#justintrudeau</a> <a href=\"#\">#Cdnpoli</a> <a href=\"#\">#heavesteve2015</a>",
              "imageUrl": "https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/10914524_736323199807906_2055630207_n.jpg"
            }, {
              "type": "instagram",
              "dateSubmitted": "14 hours ago",
              "username": "the_shakdiesel",
              "profileUrl": "https://instagram.com/the_shakdiesel/",
              "content": "Well that was fancy. Met my favorite archer <a href=\"#\">@coltonlhaynes</a> <a href=\"#\">#Arrow</a> <a href=\"#\">#Colton</a> <a href=\"#\">#speedy</a> <a href=\"#\">#Roy</a> <a href=\"#\">#Harper</a> <a href=\"#\">#Face</a> <a href=\"#\">#idol</a> <a href=\"#\">#Megacon</a> <a href=\"#\">#2015</a> <a href=\"#\">#archie</a>",
              "imageUrl": "https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11007820_925708757462162_2051397299_n.jpg"
            }, {
              "type": "reddit",
              "dateSubmitted": "4 years ago",
              "username": "razzark666",
              "profileUrl": "http://www.reddit.com/user/razzark666",
              "commentUrl": "http://www.reddit.com/r/canada/comments/fygig/we_should_really_protest_this_harper_government/c1jlad6",
              "postUrl": "http://www.reddit.com/r/canada/comments/fygig/we_should_really_protest_this_harper_government/",
              "content": "The silver lining of the \"Harper Government\" thing is that he only besmirches his name when he does stuff now, not Canada's..."
            }, {
              "type": "reddit",
              "dateSubmitted": "4 years ago",
              "username": "Gaaaaaaa",
              "profileUrl": "http://www.reddit.com/user/Gaaaaaaa",
              "commentUrl": "http://www.reddit.com/r/canada/comments/2gt7d1/liberal_leader_justin_trudeau_faced_with_an_open/ckmo9x5",
              "postUrl": "http://www.reddit.com/r/canada/comments/2gt7d1/liberal_leader_justin_trudeau_faced_with_an_open/",
              "content": "I'm perfectly fine with Trudeau clearing old-school, right-wing religious ideologues out of the Liberal Party. In fact, it's one of the reasons I will probably vote for his party."
            }, {
              "type": "tweet",
              "username": "Ursula Underwood",
              "handle": "Mullen_Colon",
              "content": "I dont think the Conservatives can call Trudeau a pretty boy anymore now that the Duffy Trial hinges on who paid for Harpers makeup <a href=\"#\">#CdnPoli</a>",
              "dateSubmitted": "April 25 1996, 1:17 PM",
              "profileImageUrl": "https://distillery.s3.amazonaws.com/profiles/profile_1059316154_75sq_1396219605.jpg",
              "id": "551d972ce5563a89a0cdd0f9"
            }, {
              "type": "tweet",
              "username": "Esperanza Lester",
              "handle": "Leticia_Calderon",
              "content": "Justin Trudeau Takes A Stand on Muslim Rules and Women Niqab <a href=\"#\">http://www.theottawanews.ca/justin-trudeau-on-muslim-rules.html</a> <a href=\"#\">#cdnpoli</a> <a href=\"#\">#ottnews</a>",
              "dateSubmitted": "April 30 1992, 1:27 PM",
              "profileImageUrl": "https://pbs.twimg.com/profile_images/502308558986170370/V2Wf0_Z5_normal.jpeg",
              "id": "551d972c12f223c084153a0b"
            }, {
              "type": "instagram",
              "dateSubmitted": "2 hours ago",
              "username": "nanceess",
              "profileUrl": "https://instagram.com/nanceess/",
              "content": "Passover and politics. It's deep. <a href=\"#\">#justintrudeau</a> <a href=\"#\">#passover</a> <a href=\"#\">#canada</a> <a href=\"#\">#cdnpoli</a> <a href=\"#\">#longweekend</a> <a href=\"#\">#happypassover</a>",
              "imageUrl": "https://scontent-lga.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11008260_731241756994505_1455197544_n.jpg"
            }, {
              "type": "tweet",
              "username": "Prince Mccarty",
              "handle": "Irma_Schneider",
              "content": "<a target=\"_blank\" href=\"https://twitter.com/ledauphin604\">@ledauphin604</a> <a target=\"_blank\" href=\"https://twitter.com/mapaquet\">@mapaquet</a> <a target=\"_blank\" href=\"https://twitter.com/hashtag/Trudeau?src=hash\">#Trudeau</a> père ne rêvait qu'à un trip d'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare",
              "dateSubmitted": "April 23 2011, 1:39 PM",
              "profileImageUrl": "https://pbs.twimg.com/profile_images/416688351383527424/cT77T65k_normal.png",
              "id": "551d972c3d83023ba1cb1680"
            }, {
              "type": "reddit",
              "dateSubmitted": "1 years ago",
              "username": "Plonkys",
              "profileUrl": "http://www.reddit.com/user/Plonkys",
              "commentUrl": "http://www.reddit.com/r/CanadaPolitics/comments/1l111c/to_those_criticizing_justin_trudeau_for_smoking/cbwfeie",
              "postUrl": "http://www.reddit.com/r/CanadaPolitics/comments/1l111c/to_those_criticizing_justin_trudeau_for_smoking/",
              "content": "Doing drugs in general is what I think the problem is, but it is quite correct to be putting Trudeau and Ford together now, even though we know 100% Trudeau does drugs and we still don't know 100% if Ford did."
            }, {
              "type": "news",
              "title": "Timid Justin Trudeau ads not enough to take on NDP in Quebec, analyst says",
              "shortTitle": "Timid Justin Trudeau ads not enough...",
              "content": "<p>The message</p><p>Liberal Leader Justin Trudeau on the environment: \"I want my three children to grow up in a greener, cleaner country. One that respects the environment. That’s what we all want.\"</p><p>On the economy: \"Instead of giving tax breaks to the rich as Mr. Harper has done, we offer to give back the money to those who need it.\"</p><p>On culture: \"We must reinvest in culture and be proud of our creators who shine around the globe.\"</p><p>\"I’m Justin Trudeau, leader of the Liberal Party of Canada, and I have a committed team that defends the values of our community.\"</p><p>New Liberal Party of Canada ad in Quebec</p><p>Why now?</p><p>The Liberals must get Quebec voters — francophone voters — on side if they're going to form a government. That means erecting a Quebec wall to stop Tom Mulcair and the orange wave of NDP MPs elected in 2011. Polls suggest Mulcair might not have the easygoing \"le Bon Jack\" image of his predecessor, but his party is still leading the Liberals in the province, and Quebecers see him as the most credible of the four federal leaders.</p><p>Those same polls tell Liberal Party strategists there’s no \"mania\" for Trudeau in Quebec. While rather lean on policy, these ads seem aimed at painting a more personal portrait of Trudeau (a greener country for my children) and capitalize on his roots in Quebec by referring to the Radio-Canada television programs from his childhood.</p><p>Kernel of truth</p><p>Quebecers like to say that no one can be against the good things or against virtue. There isn’t much in this ad to argue with. The messages about the environment and the economy will likely resonate with some voters, but they’re rather vanilla. The one about culture and Radio-Canada cautiously deals with identity. Again, nothing here that hasn’t been said by others who are far more forceful than Trudeau when declaring their deep attachment to Quebec’s cultural heritage.</p><p>A timid effort</p><p>There's nothing in the narrative or the delivery that is either exciting (if you're hoping to engage people as this recruitment campaign is aiming to do) or signalling that he intends to do politics differently (as he boldly declared when he became leader).</p><p>Trudeau is supposed to be the face of the next generation with a refreshing perspective and attitude. That’s not how he sounds and looks in these rather generic ads. Perhaps this is the Liberals' attempt at giving Trudeau gravitas, to overcome his perceived lack of experience.</p><p>Great politicians are great actors. This feels scripted. His delivery comes across as austere. Instead, he needs to look and sound sincere.</p><p>There are, of course, limitations in radio, but someone like Jack Layton was able to convey a smile through his voice. And he would have adopted a much more authentic tone that speaks to people instead of at them.</p><p>This is a timid approach by a party that needs to be bolder if it wants a significant breakthrough in Quebec. I give it 2.5 out of 5.</p>",
              "shortContent": "Liberal Leader Justin Trudeau on the environment: \"I want my three children to grow up in a greener, cleaner country. One that respects the environment. That’s what we all want.\"",
              "sourceUrl": "http://www.cbc.ca/news/politics/timid-justin-trudeau-ads-not-enough-to-take-on-ndp-in-quebec-analyst-says-1.3009647",
              "sourceDomain": "cbc.ca",
              "primaryImageLarge": "http://i.cbc.ca/1.2961266.1427335026!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/liberal-leader-justin-trudeau.jpg"
            }, {
              "type": "reddit",
              "dateSubmitted": "3 months ago",
              "username": "Logical_Hare",
              "profileUrl": "http://www.reddit.com/user/Logical_Hare",
              "commentUrl": "http://www.reddit.com/r/canada/comments/27vw5b/justin_trudeau_says_abortion_not_up_to_male/ci4xw1d",
              "postUrl": "http://www.reddit.com/r/canada/comments/27vw5b/justin_trudeau_says_abortion_not_up_to_male/",
              "content": "I'm in favour of abortions. On demand. The more the bloody merrier. I don't play this \"good-girls-don't-abort\" bullshit game that the media and many allegedly \"pro-choice\" politicians play. Real life isn't fucking 'Juno'. If you're pro-choice..."
            }, {
              "type": "reddit",
              "dateSubmitted": "2 hours ago",
              "username": "Akesgeroth",
              "profileUrl": "http://www.reddit.com/user/Akesgeroth",
              "commentUrl": "http://www.reddit.com/r/canada/comments/27vw5b/justin_trudeau_says_abortion_not_up_to_male/ci5cfzh",
              "postUrl": "http://www.reddit.com/r/canada/comments/27vw5b/justin_trudeau_says_abortion_not_up_to_male/",
              "content": "Why is he talking about this? No one in any party has shown any intention of bringing this back to the table. Abortion isn't a political issue in Canada and I would love for Trudeau to stop trying to make it one."
            }, {
              "type": "tweet",
              "username": "Salas Rush",
              "handle": "Gilbert_Rowland",
              "content": "<a target=\"_blank\" href=\"https://twitter.com/ledauphin604\">@ledauphin604</a> <a target=\"_blank\" href=\"https://twitter.com/mapaquet\">@mapaquet</a> <a target=\"_blank\" href=\"https://twitter.com/hashtag/Trudeau?src=hash\">#Trudeau</a> père ne rêvait qu'à un trip d'orgueil centré sur lui-même, non de faire un pays bilingue mare usque ad mare",
              "dateSubmitted": "April 22 1984, 1:57 PM",
              "profileImageUrl": "https://pbs.twimg.com/profile_images/511272592737460225/pJ-MXDDs_normal.jpeg",
              "id": "551d972c636897fe2a694786"
            }, {
              "type": "instagram",
              "dateSubmitted": "3 days ago",
              "username": "milesdavidts",
              "profileUrl": "https://instagram.com/milesdavidts/",
              "content": "Not car-related but what a shame... <a href=\"#\">#canada</a> <a href=\"#\">#ottawa</a> <a href=\"#\">#conservatives</a> <a href=\"#\">#stephenharper</a> <a href=\"#\">#cpc</a> <a href=\"#\">#ndp</a> <a href=\"#\">#liberals</a> <a href=\"#\">#stopharper</a> <a href=\"#\">#justintrudeau</a> <a href=\"#\">#tommulcair</a>",
              "imageUrl": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/10932553_401170096723641_520820310_n.jpg"
            }];
            return data;
          }
        },
        controller: function ($scope, data) {
          $scope.data = data;
        }
      });
    });

})();