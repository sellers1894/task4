(function(){
	'use strict';

	angular
	.module('app.task')
	.controller('TaskController', TaskController);

	TaskController.$inject = ['dataservice', 'taskservice'];

	function TaskController(dataservice, taskservice){
		var vm = this;
		vm.tasks = dataservice.getTasks();
		vm.editTitle = editTitle;
		vm.deleteTask = deleteTask;
		vm.addItem = addItem;
		vm.editItemTitle = editItemTitle;
		vm.deleteItem = deleteItem;

		vm.viewItem = viewItem;

		function editTitle(id){
			var name = prompt("Тест", vm.tasks.data[id].name);
			if (name){
				vm.tasks.data[id].name = name;
				dataservice.update();
			}
		}

		function deleteTask(id){
			vm.tasks.data.splice(id, 1);
			dataservice.update();
		}

		function addItem(id){
			vm.tasks.data[id].items.push({
				name: "item "+(vm.tasks.data[id].items.length+1),
				comments: [],
				checkList: []
			});
			dataservice.update();
		}

		function editItemTitle(parent_id, id){
			var name = prompt("Тест", vm.tasks.data[parent_id].items[id].name);
			if (name){
				vm.tasks.data[parent_id].items[id].name = name;
				dataservice.update();
			}
		}

		function deleteItem(parent_id, id){
			vm.tasks.data[parent_id].items.splice(id, 1);
			dataservice.update();
		}



		function viewItem(parent_id, id){
			taskservice.setCarrentTask(vm.tasks.data[parent_id]);
			taskservice.setCarrentTask(vm.tasks.data[parent_id].items[id]);
		}
	}
})();