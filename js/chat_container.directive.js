"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chatContainer", ChatContainer);

	function ChatContainer(){
		var directive = {
			templateUrl: "js/chat_container.directive.html",
			controller: ChatContainerController,
			controllerAs: "chatContainer",
			bindToController: true
		}
		return directive;
	}

	function ChatContainerController(){
		var vm = this;
		vm.chats = [
			"foo",
			"bar"
		]
	}

})();
