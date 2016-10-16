"use strict";

(function(){

	angular
		.module("chatter")
		.directive("listOfChats", listOfChats);

	listOfChats.$inject = ["fbdata"];

	function listOfChats(fbdata){
		var directive = {
			templateUrl: "js/list_of_chats.directive.html",
			link: linkFunction
		}
		return directive;

		function linkFunction($scope, $el, $attr){
			var list = fbdata.load("list_of_chats");
			list.newChat = {}
			list.addNewChat = addNewChat;
			$scope.list = list;

			function addNewChat(){
				list.$add(list.newChat);
				list.newChat = {};
			}
		}
	}

})();
