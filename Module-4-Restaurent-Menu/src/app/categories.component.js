(function() {
    'use strict';

    angular.module('MenuApp')
    .component('menuCategories', {
        templateUrl: 'src/app/templates/categories.template.html',
        bindings: {
            items: '<'
        }
    });
})();

