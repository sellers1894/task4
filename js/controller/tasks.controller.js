(function(){
	'use strict';

	angular
	.module('app')
	.controller('TasksController', TasksController);

	function TasksController(){
		var vm = this;
		vm.bla = 'hi';
		vm.getBla = getBla;

		function getBla(){
			var db = openDatabase("ToDo", "0.1", "A list of to do items.", 200000);
			if (!db)
				return "err";
			return "ok!";
		}
	}
})();