(function(){
	'use strict';

	angular
	.module('app')
	.controller('MainController', MainController);

	MainController.$inject = ['dataservice'];

	function MainController(dataservice){
		var vm = this;
		vm.bla = 'hi';
		dataservice.onLoad();
		console.log("main!");
	}
})();