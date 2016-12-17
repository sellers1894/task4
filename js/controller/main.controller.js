(function(){
	'use strict';

	angular
	.module('app')
	.controller('MainController', MainController);

	function MainController(){
		var vm = this;
		vm.bla = 'hi';
		vm.getBla = getBla;

		function getBla(){
			return "asd";
		}
	}
})();