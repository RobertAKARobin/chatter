"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chatList", chatList);

	chatList.$inject = ["ChatList"];

	function chatList(ChatList){
		var directive = {
			templateUrl: "js/chat_list.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var list = ChatList.load();
			$scope.list = list;
		}
	}

})();
