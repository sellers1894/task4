(function(){
	'use strict';

	angular
	.module('app.task')
	.directive('taskInfo', taskInfo);

	function taskInfo(){
		return{
			restrict: 'EA',
			scope: true,
			controllerAs: 'TaskItem',
			controller: 'TaskItemController',
			templateUrl: 'template/taskinfo.template.html'
		};
	}
})();