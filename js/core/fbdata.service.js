"use strict";

(function(){

	angular
		.module("chatter")
		.service("fbdata", fbdata);

	fbdata.$inject = ["$firebaseObject", "$firebaseArray"];

	function fbdata($firebaseObject, $firebaseArray){
		var root = firebase.database().ref();
		var service = {
			load: load
		};
		return service;

		function load(path, type){
			var fbType = (type == "obj" ? $firebaseObject : $firebaseArray);
			return fbType(root.child(path));
		}
	}

})();
