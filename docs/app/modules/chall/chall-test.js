(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:challTest
	 * @description
	 * # challTest
	 * Test of the app
	 */

	describe('chall test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('angular-client');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ChallCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
