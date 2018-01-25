(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:challService
	 * @description
	 * # challService
	 * Service of the app
	 */

	angular
		.module('chall')
		.factory('ChallService', Chall);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Chall.$inject = ['$http'];

	function Chall($http) {

		return {
			test: function (test) {
				return test;
			}
		}

	}

})();
