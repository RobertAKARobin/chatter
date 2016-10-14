"use strict";

(function(){

	angular
		.module("app.core")
		.service("currentUser", currentUser);

	currentUser.$inject = ["$firebaseAuth"];

	function currentUser($firebaseAuth){
		var currentUser = this,
				auth = $firebaseAuth();
		currentUser.isSignedIn = false;
		currentUser.trySignIn = trySignIn;
		currentUser.signOut = auth.$signOut;
		auth.$onAuthStateChanged(authStateChange);

		function trySignIn(){
			auth
				.$signInWithPopup("google")
				.catch(authError);
		}

		function authStateChange(user){
			currentUser.errors = null;
			if(user){
				currentUser.isSignedIn = true;
				populateCurrentUser(user);
			}else{
				currentUser.isSignedIn = false;
			}
		}

		function populateCurrentUser(user){
			currentUser.name				= user.displayName;
			currentUser.id					= user.uid;
			currentUser.email				= user.email;
			currentUser.photoURL		= user.photoURL;
		}

		function authError(error){
			currentUser.isSignedIn = false;
			currentUser.errors = (currentUser.errors || []);
			currentUser.errors.push(error);
		}
	}

})();
