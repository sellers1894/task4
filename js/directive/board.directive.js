(function(){
	'use strict';

	angular
	.module('app.task')
	.directive('board', board);

	function board(){
		return{
			restrict: 'EA',
			scope: true,
			controllerAs: 'Board',
			controller: 'BoardController',
			templateUrl: 'template/board.template.html'
		};
	}
})();