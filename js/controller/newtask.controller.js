(function(){
	'use strict';

	angular
	.module('app.task')
	.controller('NewTaskController', NewTaskController);

	NewTaskController.$inject = ['dataservice'];

	function NewTaskController(dataservice){
		var vm = this;
		vm.addTask = addTask;

		function addTask(){
			if (dataservice.getCarrentBoardId() === -1){
				alert("Выбирите доску!");
			}else{
				dataservice.addTask();
			}
		}
	}
})();