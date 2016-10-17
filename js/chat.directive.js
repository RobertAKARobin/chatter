"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chat", chat);

	chat.$inject = ["Chat"];

	function chat(Chat){
		var directive = {
			templateUrl: "js/chat.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var $id = $attr.chat;
			var chat = Chat.get($id);
			console.log(chat)
			// chat.name = $attr.chat;
			// chat.messages = fbdata.load(chat.name);
			// chat.messages.$loaded().then(whenLoaded);
			// $scope.chat = chat;

			function whenLoaded(){
				chat.isLoaded = true;
			}
		}
	}

})();
