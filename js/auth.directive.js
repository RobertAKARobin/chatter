"use strict";

(function(){

	angular
		.module("chatter")
		.directive("auth", Auth);

	function Auth(){
		var directive = {
			templateUrl: "js/auth.template.html",
			controller: AuthController,
			controllerAs: "auth",
			bindToController: true,
			link: linkFunction
		}
		return directive;

		function linkFunction(scope, el, attr, vm){

		}
	}

	AuthController.$inject = ["$firebaseAuth"];

	function AuthController($firebaseAuth){
		var vm = this;
		var auth = $firebaseAuth();
		vm.sign_in = signIn;

		function signIn(){
			auth.$signInWithPopup("google").then(function(){
				console.log(arguments)
			}).catch(function() {
				console.log(arguments)
			});
		}
	}

})();
