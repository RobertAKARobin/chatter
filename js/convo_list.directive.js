"use strict";

(function(){

	angular
		.module("chatter")
		.directive("convoList", convoList);

	convoList.$inject = ["Convo"];

	function convoList(Convo){
		var directive = {
			templateUrl: "js/convo_list.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var list = Convo.read_list();
			$scope.list = list;
		}
	}

})();
