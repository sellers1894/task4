(function(){
	'use strict';

	angular
	.module('app')
	.controller('TaskController', TaskController);

	TaskController.$inject = ['dataservice'];

	function TaskController(dataservice){
		var vm = this;
		vm.tasks = dataservice.getTasks();
		vm.editTitle = editTitle;

		function editTitle(id){
			var name = prompt("Тест", vm.tasks.tasks[id].name);
			if (name){
				vm.tasks.tasks[id].name = name;
				dataservice.update();
			}
		}
	}
})();