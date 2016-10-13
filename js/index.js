"use strict";

(function(){

	firebase.initializeApp(ENV);

	angular
		.module("chatter", [
			"firebase"
		])
		.run(run);

	run.$inject = ["$rootScope", "currentUser"];

	function run($rootScope, currentUser){
		$rootScope.currentUser = currentUser;
	}

})();
