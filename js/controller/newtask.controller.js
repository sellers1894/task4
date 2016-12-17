(function(){
	'use strict';

	angular
	.module('app.task')
	.controller('NewTaskController', NewTaskController);

	function NewTaskController(){
		var vm = this;
		vm.bla = 'hi';
		vm.getBla = getBla;

		function getBla(){
			return "asd";
		}
	}
})();