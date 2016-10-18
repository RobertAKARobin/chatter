"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chatNew", chatNew);

	chatNew.$inject = ["ChatNew"];

	function chatNew(ChatNew){
		var directive = {
			templateUrl: "js/chat_new.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var chat = ChatNew.create();
			$scope.chat = chat;
		}
	}

})();
