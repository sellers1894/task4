(function(){
	'use strict';

	angular
	.module('app.task')
	.directive('tasks', tasks);

	function tasks(){
		return{
			restrict: 'EA',
			scope: true,
			controllerAs: 'tasks',
			controller: 'TasksController',
			templateUrl: 'template/tasks.template.html'
		};
	}
})();