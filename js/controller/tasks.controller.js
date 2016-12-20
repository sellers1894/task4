(function(){
	'use strict';

	angular
	.module('app')
	.controller('TasksController', TasksController);

	TasksController.$inject = ['dataservice'];

	function TasksController(dataservice){
		var vm = this;
		vm.bla = dataservice.getTasks();
		vm.tasks = dataservice.getTasks();
		console.log(vm.tasks);
	}
})();