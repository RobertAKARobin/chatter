"use strict";

(function(){

	angular
		.module("app.core", [
			"firebase"
		])
		.config(config)
		.run(run);

	function config(){
		firebase.initializeApp(ENV);
	}

	run.$inject = ["$rootScope", "currentUser"];

	function run($rootScope, currentUser){
		$rootScope.currentUser = currentUser;
	}

})();
