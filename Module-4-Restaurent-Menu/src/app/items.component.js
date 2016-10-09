(function() {
    'use strict';

    angular.module('MenuApp')
    .component('menuItems', {
        templateUrl: 'src/app/templates/items.template.html',
        bindings: {
            items: '<'
        }
    });
})();

