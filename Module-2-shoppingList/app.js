
(function(){
   'use strict';
angular.module('app', [])
    .controller('MoveCtrl', function($scope) {
           
    $scope.moveItem = function(items, from, to) {

        items.forEach(function(item) {
          var idx = from.indexOf(item);
          if (idx != -1) {
              from.splice(idx, 1);
              to.push(item);      
          }
        });
    };
    $scope.moveAll = function(from, to) {

        angular.forEach(from, function(item) {
            to.push(item);
        });
        from.length = 0;
    };                

    $scope.selecteditems = [];                                

    $scope.availableitems = [
      {
        id: 1, 
        name: 'Apple cookie-10 box'
      }, 
      {
        id: 2, 
        name: 'Berger Cookie-5 box'
      },
      {
        id: 3,
        name: 'Biscuit-3box'
      },
        {
        id: 4,
        name: 'Boortsog-2box'
      },
        {
        id: 5,
        name: 'Bredela-1box'
      }
    ];
  }); 
})();
