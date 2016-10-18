"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chatNew", chatNew);

	chatNew.$inject = ["Chat"];

	function chatNew(Chat){
		var directive = {
			templateUrl: "js/chat_new.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var chat = {};
			chat.save = save;
			$scope.chat = chat;

			function save(){
				Chat.create(chat);
			}
		}
	}

})();
