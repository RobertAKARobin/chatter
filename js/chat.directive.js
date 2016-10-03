"use strict";

(function(){

	angular
		.module("chatter")
		.directive("chat", Chat);

	Chat.$inject = ["$firebaseObject", "$firebaseArray"];

	function Chat($firebaseObject, $firebaseArray){
		var directive = {},
				db = firebase.database().ref();
		directive.templateUrl = "js/chat.template.html";
		directive.link = function($scope, $element, $attr){
			$scope.messages = $firebaseArray(db.child($attr.chat));
		}
		return directive;
	}

})();
