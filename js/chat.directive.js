"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chat", Chat);

	function Chat(){
		var directive = {
			templateUrl: "js/chat.template.html",
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
				vm.loaded = true;
			}
		}
	}

	ChatController.$inject = ["$firebaseObject", "$firebaseArray"];

	function ChatController($firebaseObject, $firebaseArray){
		var vm = this;
		var chats = firebase.database().ref().child("chats");
		vm.chatName = vm["chat"];
		vm.messages = $firebaseArray(chats.child(vm.chatName));
	}

})();
