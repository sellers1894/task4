(function(){
	'use strict';

	angular
	.module('app')
	.controller('TaskItemController', TaskItemController);

	TaskItemController.$inject = ['dataservice', 'taskservice'];

	function TaskItemController(dataservice, taskservice){
		var vm = this;
		vm.carrentTask = taskservice.getCarrentTask();
		vm.carrentItemTask = taskservice.setCarrentItemTask();
	}
})();