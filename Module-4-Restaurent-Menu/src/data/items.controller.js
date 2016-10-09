(function() {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items', '$stateParams'];
    function ItemsController(items, $stateParams) {
        var itemDetail = this;
        var item = items[$stateParams.itemId];
        itemDetail.name = item.name;
        itemDetail.description = item.description;
    }
})();

