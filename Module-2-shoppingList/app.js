(function () {
    'use strict';

//Modules
    angular.module('ShoppingListCheckoff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


//This line for minification purposes
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
//Function controller
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.toBuyItems();

        toBuy.buyToBought = function (itemIndex) {
            ShoppingListCheckOffService.buyToBought(itemIndex);
        }
    }

//This line for minification purposes
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
//Function controller
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.boughtItems();
    }

//Services    
    function ShoppingListCheckOffService() {
        var service = this;
        var toBuy = [];
        var alreadyBought = [];

//Function to move items from to buy to already bought
        service.buyToBought = function (itemIndex) {
            alreadyBought.push(toBuy[itemIndex]); //add to bought list
            toBuy.splice(itemIndex, 1); //remove from to buy
        }
        service.addItem = function (itemName, itemQuantity) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            }
            toBuy.push(item);
        }

        //To Buy Items
        var totalItems = [
            {"name": "Choclate chips", "quantity": 10},
            {"name": "Oatmeal", "quantity": 50},
            {"name": "Apple", "quantity": 30},
            {"name": "Biscuit", "quantity": 11},
            {"name": "Banana Nuts", "quantity": 40}
        ];

        for (var i = 0; i < totalItems.length; i++) {
            service.addItem(totalItems[i].name, totalItems[i].quantity);
        }

        service.toBuyItems = function () {
            return toBuy;
        }

        service.boughtItems = function () {
            return alreadyBought;
        }
    }

})();

