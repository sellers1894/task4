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

		vm.addMessage = addMessage;
		vm.deleteMessage = deleteMessage;

		vm.checkedListItem = checkedListItem;
		vm.getPercentList = getPercentList;
		vm.getPercentTask = getPercentTask;

		vm.editName = editName;
		vm.deleteObject = deleteObject;


		function editTaskName(){
			editName(vm.carrentTask.data, "Название задания");
		}


		function addCheckList(){
			vm.carrentTask.data.checkList.push({
				name: "checkList "+(vm.carrentTask.data.checkList.length+1),
				items: []
			});
			dataservice.update();
		}
		function editCheckList(index){
			editName(vm.carrentTask.data.checkList[index], "Название задачи");
		}
		function deleteCheckList(index){
			deleteObject(vm.carrentTask.data.checkList, index);
		}


		function addCheckListItem(index){
			vm.carrentTask.data.checkList[index].items.push({
				name: "checkItem "+(vm.carrentTask.data.checkList[index].items.length+1),
				checked: false
			});
			dataservice.update();
		}
		function editCheckListItem(parent, index){
			editName(vm.carrentTask.data.checkList[parent].items[index], "Название задачи");
		}
		function deleteCheckListItem(parent, index){
			deleteObject(vm.carrentTask.data.checkList[parent].items, index);
		}



		function checkedListItem(parent, index){
			var item = vm.carrentTask.data.checkList[parent].items[index];
			item.checked = !item.checked;
			dataservice.update();
		}

		function getPercentList(index){
			var trueItem = 0;
			var items = vm.carrentTask.data.checkList[index].items;

			if (!items.length)
				return 100;

			items.forEach(function(item) {
				if (item.checked){
					trueItem++;
				}
			});
			return (trueItem/items.length)*100;
		}

		function getPercentTask(){
			var sumCheckList = 0;
			var checkList = vm.carrentTask.data.checkList;

			if (!checkList || !checkList.length)
				return 100;

			checkList.forEach(function(item, i) {
				sumCheckList += getPercentList(i);
			});
			return (sumCheckList/(checkList.length*100))*100;
		}



		function addMessage(title, text){
			if (title && text){
				vm.carrentTask.data.comments.push({
					title: title,
					text: text
				});
				dataservice.update();
			}
		}

		function deleteMessage(index){
			deleteObject(vm.carrentTask.data.comments, index);
		}





		function editName(object, title){
			var name = prompt(title, object.name);
			if (name){
				object.name = name;
				dataservice.update();
			}
		}
		function deleteObject(object, index){
			object.splice(index, 1);
			dataservice.update();
		}

	}
})();