"use strict";

(function(){

	angular
		.module("chatter")
		.service("fbdata", fbdata);

	function fbdata(){

		var service = this;
		var root = firebase.database().ref();
		service.id = id;

		function id(path){
			return root.child(path);
		}

	}

})();
