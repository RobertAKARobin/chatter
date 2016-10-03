"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chat", Chat);

	Chat.$inject = ["$firebaseObject", "$firebaseArray"];

	function Chat($firebaseObject, $firebaseArray){
		var directive = {
			templateUrl: "js/chat.template.html",
			controller: ChatController,
			controllerAs: "vm",
			link: linkFunction
		}
		return directive;

		function linkFunction(scope, el, attr, vm){
			var db = firebase.database().ref();
			var connection = $firebaseArray(db.child(attr["chat"]));
			connection.$loaded().then(vm.show);
		}
	}

	function ChatController(){
		var vm = this;
		vm.show = showChat;

		function showChat(messages){
			vm.messages = messages;
			vm.loaded = true;
		}
	}

})();
