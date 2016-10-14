"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chat", chat);

	chat.$inject = ["fbdata"];

	function chat(fbdata){
		var directive = {
			templateUrl: "js/chat.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var chat = {};
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
