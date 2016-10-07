"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chatContainer", ChatContainer);

	function ChatContainer(){
		var directive = {
			templateUrl: "js/chatcontainer.template.html",
			controller: ChatContainerController,
			controllerAs: "chatcontainer",
			bindToController: true,
			link: linkFunction
		}
		return directive;

		function linkFunction(){

		}
	}

	function ChatContainerController(){
		var vm = this;
		vm.chats = [
			"foo",
			"bar"
		]
	}

})();
