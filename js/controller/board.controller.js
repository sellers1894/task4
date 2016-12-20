(function(){
	'use strict';

	angular
	.module('app')
	.controller('BoardController', BoardController);

	BoardController.$inject = ['dataservice', 'taskservice'];

	function BoardController(dataservice, taskservice){
		var vm = this;
	}
})();