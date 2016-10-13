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

	AuthController.$inject = ["currentUser"];

	function AuthController(currentUser){
		var vm = this;
		vm.user = currentUser;
		vm.trySignIn = trySignIn;

		function trySignIn(){
			currentUser.trySignIn();
		}
	}

})();
