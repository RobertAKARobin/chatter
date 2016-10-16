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
			var listOfChats = fbdata.load("list_of_chats");
			listOfChats.new = {}
			listOfChats.add = add;
			$scope.listOfChats = listOfChats;

			function add(){
				listOfChats.$add(listOfChats.new);
				listOfChats.new = {};
			}
		}
	}

})();
