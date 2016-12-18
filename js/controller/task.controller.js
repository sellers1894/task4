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
		vm.addItem = addItem;
		vm.editItemTitle = editItemTitle;

		function editTitle(id){
			var name = prompt("Тест", vm.tasks.tasks[id].name);
			if (name){
				vm.tasks.tasks[id].name = name;
				dataservice.update();
			}
		}

		function addItem(id){
			vm.tasks.tasks[id].items.push({
				name: "item "+(vm.tasks.tasks[id].items.length+1),
				comments: [],
				checkList: []
			});
			dataservice.update();
			console.log(vm.tasks);
		}

		function editItemTitle(parent_id, id){
			console.log(parent_id);
			var name = prompt("Тест", vm.tasks.tasks[parent_id].items[id].name);
			if (name){
				vm.tasks.tasks[parent_id].items[id].name = name;
				dataservice.update();
			}
		}
	}
})();