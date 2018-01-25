'use strict';

/**
 * @ngdoc function
 * @name app.route:challRoute
 * @description
 * # challRoute
 * Route of the app
 */

angular.module('chall')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.chall', {
				url:'/chall',
				templateUrl: 'app/modules/chall/chall.html',
				controller: 'ChallCtrl',
				controllerAs: 'vm'
			});

		
	}]);
