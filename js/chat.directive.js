"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chat", chat);

	function chat(fbdata){
		var directive = {
			templateUrl: "js/chat.directive.html",
			controller: ChatController,
			controllerAs: "chat",
			bindToController: true,
			scope: {
				chat: "@"
			},
			link: linkFunction
		}
		return directive;

		function linkFunction(scope, el, attr, vm){
			vm.messages.$loaded().then(whenLoaded);

			function whenLoaded(){
				vm.isLoaded = true;
			}
		}
	}

	ChatController.$inject = ["fbdata"];

	function ChatController(fbdata){
		var vm = this;
		vm.messages = fbdata.getChat(vm.chat);
	}

})();
