"use strict";

(function(){

	angular
		.module("app.core")
		.directive("auth", auth);

	function auth(){
		var directive = {
			templateUrl: "js/core/auth.directive.html"
		}
		return directive;
	}

})();
