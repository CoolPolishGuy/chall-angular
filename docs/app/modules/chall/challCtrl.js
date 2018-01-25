(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:challCtrl
	* @description
	* # challCtrl
	* Controller of the app
	*/

  	angular
		.module('chall')
		.controller('ChallCtrl', Chall);

		Chall.$inject = ['$scope','ChallService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Chall($scope,challService) {
			/*jshint validthis: true */
			var vm = this;
			vm.name = "nom du chalenge";
			vm.info = 'not pressed';

			vm.getInformation = function() {
				vm.info = challService.test("ok");
				//$scope.apply();
			}

		}

})();
