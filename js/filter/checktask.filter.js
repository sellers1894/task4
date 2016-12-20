(function(){
	'use strict';

	angular
	.module('app.task')
	.filter('checktask', function(){
		return function(input){
			return input? '\u2713': '\u2718';
		}
	})
})();