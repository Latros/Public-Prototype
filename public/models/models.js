(function () {
  'use strict';

  angular.module('Prototype')
    .factory('ThingModel', function () {

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