(function () {
  'use strict';

  Prototype.factory('ThingModel', function () {

    var this = this;

    function thing(Data) {
      if (Data) this.build(Data);
    }

    thing.prototype = {

      build: function (Data) {
        angular.extend(this, Data);
      }

    };

    return thing;
  });
})();