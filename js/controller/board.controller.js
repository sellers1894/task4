(function(){
	'use strict';

	angular
	.module('app.board')
	.controller('BoardController', BoardController);

	BoardController.$inject = ['dataservice', 'taskservice'];

	function BoardController(dataservice, taskservice){
		var vm = this;
		vm.boards = dataservice.getBoards();
		vm.currentBoardId = -1;

		vm.addBoard = addBoard;
		vm.editBoard = editBoard;
		vm.deleteBoard = deleteBoard;

		vm.checkBoard = checkBoard;
		vm.getCurrentBoardName = getCurrentBoardName;

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

		function deleteBoard(index){
			vm.boards.board.splice(index, 1);
			if (vm.currentBoardId == index){
				vm.currentBoardId = -1;
				dataservice.checkBoard(-1);
			}
			dataservice.update();
		}

		function checkBoard(index){
			vm.currentBoardId = index;
			dataservice.checkBoard(index);
		}

		function getCurrentBoardName(){
			return (vm.currentBoardId !== -1)? vm.boards.board[vm.currentBoardId].name: "Не выбрано";
		}
	}
})();