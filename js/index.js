"use strict";

(function(){

	firebase.initializeApp(ENV);

	angular
		.module("chatter", [
			"firebase"
		]);

})();
