"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chatContainer", chatContainer);

	function chatContainer(){
		var directive = {
			templateUrl: "js/chat_container.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var chatContainer = {};
			chatContainer.chats = [
				"foo",
				"bar"
			];
			$scope.chatContainer = chatContainer;
		}
	}

})();
