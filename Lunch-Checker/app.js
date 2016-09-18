(function () {
    'use strict';
    angular.module("LunchCheck", ['ngMessages'])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.addItemList = function () {
            var list = $scope.foodItem;
            //$scope.foodCount = $scope.foodItem.split(',').length;
            var foodCount = list.length;
            if (foodCount <= 3) {
                $scope.enjoyormuch = "Enjoy";
            } else if (foodCount > 3) {
                $scope.enjoyormuch = "Too Much";
            }
        };
    }
})();
