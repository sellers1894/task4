(function(){
	'use strict';

	angular
	.module('app.task')
	.controller('NewTaskController', NewTaskController);

	NewTaskController.$inject = ['dataservice'];

	function NewTaskController(dataservice){
		var vm = this;
		vm.bla = 'hi0';
		vm.addTask = addTask;

		function addTask(){
			console.log("addTaskCtrl");
			dataservice.addTask();
		}
	}
})();