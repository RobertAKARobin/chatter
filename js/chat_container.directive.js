"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chatContainer", chatContainer);

	chatContainer.$inject = ["fbdata"];

	function chatContainer(fbdata){
		var directive = {
			templateUrl: "js/chat_container.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var chatContainer = {};
			chatContainer.chats = fbdata.load("chat_info");
			chatContainer.addNewChat = addNewChat;
			$scope.chatContainer = chatContainer;

			function addNewChat(){
				chatContainer.chats.$add(chatContainer.newChat);
				chatContainer.newChat = {};
			}
		}
	}

})();
