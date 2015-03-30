(function () {
  'use strict';

  Prototype.config(function ($stateProvider) {

    $stateProvider.state('', {
      url: '/',
      templateUrl: '/templates/.template.html',
      controllerAs: 'Ctrl',
      resolve: {
        thing: function () {
          return true;
        }
      },
      controller: function (thing) {
        var ctrl = this;
        ctrl.thing = thing;
        window.HomeController = ctrl;
      }
    });

  });
})();