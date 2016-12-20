(function(){
	'use strict';

	angular
	.module('app')
	.controller('BoardController', BoardController);

	BoardController.$inject = ['dataservice', 'taskservice'];

	function BoardController(dataservice, taskservice){
		var vm = this;
		vm.boards = dataservice.getBoards();
		console.log(vm.boards);

		vm.addBoard = addBoard;
		vm.editBoard = editBoard;

		function addBoard(){
			dataservice.addBoard();
		}

		function editBoard(index){
			var name = prompt("Имя доски", vm.boards.board[index].name);
			if (name){
				vm.boards.board[index].name = name;
				dataservice.update();
			}
		}
	}
})();