(function() {
	'use strict';

	angular.module('MenuApp').config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
        
		$urlRouterProvider.otherwise('/');

		$stateProvider
        
            /* Home Page */
			.state('home', {
				url: '/',
				templateUrl: 'src/app/templates/home.template.html'
			})
             /* Items*/
			.state('mainList', {
				url: '/main-list',
				templateUrl: 'src/app/templates/categories.template.html',
				controller: 'CategoriesController as mainList',
				resolve: {
					items: ['MenuDataService', function (MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			})
            /* Items-Detail*/
			.state('mainList.itemDetail', {
				url: '/item-detail/{itemId}',
				templateUrl: 'src/app/templates/items.template.html',
				controller: 'ItemsController as itemDetail',
				resolve: {
					items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
						return MenuDataService.getItemsForCategory($stateParams.itemId);
					}]
				}
            
			});
	}
})();