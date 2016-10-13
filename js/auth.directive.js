"use strict";

(function(){

	angular
		.module("chatter")
		.directive("auth", auth);

	function auth(){
		var directive = {
			templateUrl: "js/auth.directive.html"
		}
		return directive;
	}

})();
