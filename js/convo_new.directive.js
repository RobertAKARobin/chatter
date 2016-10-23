"use strict";

(function(){

	angular
		.module("chatter")
		.directive("convoNew", convoNew);

	convoNew.$inject = ["Convo"];

	function convoNew(Convo, currentUser){
		var directive = {
			templateUrl: "js/convo_new.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var convo = new Convo();
			$scope.convo = convo;
		}
	}

})();
