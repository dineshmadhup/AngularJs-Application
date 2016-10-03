(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'NarrowList',
            bindToController: true

        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var NarrowList = this;

        NarrowList.itemsInList = function () {
            for (var i = 0; i < NarrowList.items.length; i++) {
                var name = NarrowList.items[i].name;
                if (name.toLowerCase().indexOf("") !== -1) {
                    return true;
                }

            }

            return false;
        };
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var NarrowList = this;

        NarrowList.searchItems = function () {
            if (!NarrowList.searchTerm) {
                NarrowList.found = [];
                return;
            }
            var promise = MenuSearchService.getMatchedMenuItems(NarrowList.searchTerm);
            promise.then(function (response) {
                NarrowList.found = response;
            })
        }

        NarrowList.removeItem = function (index) {
            NarrowList.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (response) {
                var foundItems = response.data.menu_items
                    .filter(function (item) {
                        return item.description.indexOf(searchTerm) !== -1;
                    });
                return foundItems;
            });
        };
    }

})();

