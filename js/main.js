"use strict";

(function(){

	firebase.initializeApp({
		apiKey: "AIzaSyCZd1sxw0-9OUlE0popHUi9cLSix8AUa7I",
		authDomain: "chatter-e1d47.firebaseio.com/",
		databaseURL: "https://chatter-e1d47.firebaseio.com/",
		storageBucket: "",
		messagingSenderId: "925462461824"
	});

	angular
		.module("chatter", [
			"firebase"
		]);

})();

(function(){

	angular
		.module("chatter")
		.controller("MainController", MainController);

	MainController.$inject = ["$firebaseObject", "$firebaseArray"];

	function MainController($firebaseObject, $firebaseArray){
		var vm = this,
				ref = firebase.database().ref().child("things");
		vm.things = $firebaseArray(ref);
		vm.addnewthing = function(){
			vm.things.$add({
				content: vm.newthing
			});
		}
	}

})();
