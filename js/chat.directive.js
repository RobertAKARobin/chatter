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
			var connection = $firebaseArray(db.child($attr["chat"]));
			$scope.loaded = false;
			connection.$loaded().then(function(data){
				$scope.messages = data;
				$scope.loaded = true;
			});
		}
		return directive;
	}

})();
