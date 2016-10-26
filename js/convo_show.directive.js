'use strict';

(function(){

	angular
		.module('chatter')
		.directive('convo', convo);

	convo.$inject = ['Convo'];

	function convo(Convo){
		var directive = {
			templateUrl: 'js/convo_show.directive.html',
			link: linkFunction,
			scope: {
				convo: '='
			}
		}
		return directive;

		function linkFunction($scope, $el, $attr){

		}
	}

})();
