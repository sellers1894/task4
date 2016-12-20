(function(){
	'use strict';

	angular
	.module('app.task')
	.controller('TasksController', TasksController);

	TasksController.$inject = ['dataservice'];

	function TasksController(dataservice){
		var vm = this;
		vm.tasks = dataservice.getTasks();
	}
})();