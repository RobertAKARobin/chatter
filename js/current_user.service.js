"use strict";

(function(){

	angular
		.module("chatter")
		.service("currentUser", currentUser);

	currentUser.$inject = ["$firebaseAuth"];

	function currentUser($firebaseAuth){
		var currentUser = this,
				auth = $firebaseAuth();
		currentUser.isSignedIn = false;
		currentUser.trySignIn = trySignIn;

		function trySignIn(){
			currentUser.errors = null;
			return auth
							.$signInWithPopup("google")
							.then(signInSuccess)
							.catch(authError);
		}

		function signInSuccess(response){
			var result = response.user;
			currentUser.name				= result.displayName;
			currentUser.id					= result.uid;
			currentUser.email				= result.email;
			currentUser.photoURL		= result.photoURL;
			currentUser.isSignedIn	= true;
		}

		function authError(error){
			currentUser.isSignedIn = false;
			currentUser.errors = (currentUser.errors || []);
			currentUser.errors.push(error);
		}
	}

})();
