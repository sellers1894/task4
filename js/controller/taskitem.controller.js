(function(){
	'use strict';

	angular
	.module('app.task')
	.controller('TaskItemController', TaskItemController);

	TaskItemController.$inject = ['dataservice', 'taskservice'];

	function TaskItemController(dataservice, taskservice){
		var vm = this;
		vm.carrentTask = taskservice.getCarrentTask();
		vm.carrentItemTask = taskservice.setCarrentItemTask();

		vm.editTaskName = editTaskName;
		vm.addCheckList = addCheckList;
		vm.editCheckList = editCheckList;
		vm.deleteCheckList = deleteCheckList;

		vm.addCheckListItem = addCheckListItem;
		vm.editCheckListItem = editCheckListItem;
		vm.deleteCheckListItem = deleteCheckListItem;
		vm.checkedListItem = checkedListItem;

		function editTaskName(){
			var name = prompt("Название задания", vm.carrentTask.data.name);
			if (name){
				vm.carrentTask.data.name = name;
				dataservice.update();
			}
		}

		function addCheckList(){
			vm.carrentTask.data.checkList.push({
				name: "checkList "+(vm.carrentTask.data.checkList.length+1),
				items: []
			});
			dataservice.update();
		}
		function editCheckList(index){
			var name = prompt("Название задачи", vm.carrentTask.data.checkList[index].name);
			if (name){
				vm.carrentTask.data.checkList[index].name = name;
				dataservice.update();
			}
		}
		function deleteCheckList(index){
			vm.carrentTask.data.checkList.splice(index, 1);
			dataservice.update();
		}

		function addCheckListItem(index){
			vm.carrentTask.data.checkList[index].items.push({
				name: "checkItem "+(vm.carrentTask.data.checkList[index].items.length+1),
				checked: false
			});
			dataservice.update();
		}
		function editCheckListItem(parent, index){
			var item = vm.carrentTask.data.checkList[parent].items[index];
			var name = prompt("Название задачи", item.name);
			if (name){
				item.name = name;
				dataservice.update();
			}
		}
		function deleteCheckListItem(parent, index){
			vm.carrentTask.data.checkList[parent].items.splice(index, 1);
			dataservice.update();
		}
		function checkedListItem(parent, index){
			var item = vm.carrentTask.data.checkList[parent].items[index];
			item.checked = !item.checked;
			dataservice.update();
		}

	}
})();