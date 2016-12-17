(function(){
	'use strict';

	angular
	.module('app.task')
	.directive('newTask', newTask);

	function newTask(){
		return{
			restrict: 'EA',
			scope: true,
			controllerAs: 'newtask',
			controller: 'NewTaskController',
			templateUrl: 'template/newtask.template.html'
		};
	}
})();