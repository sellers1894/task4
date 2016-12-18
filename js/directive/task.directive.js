(function(){
	'use strict';

	angular
	.module('app.task')
	.directive('task', task);

	function task(){
		return{
			restrict: 'EA',
			scope: true,
			controllerAs: 'Task',
			controller: 'TaskController',
			templateUrl: 'template/task.template.html'
		};
	}
})();