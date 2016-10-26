'use strict';

(function(){

	angular
		.module('app.core')
		.service('currentUser', currentUser);

	currentUser.$inject = ['$firebaseAuth', 'User'];

	function currentUser($firebaseAuth, User){
		var currentUser = new User(),
				auth = $firebaseAuth();
		currentUser.isSignedIn = false;
		currentUser.trySignIn = trySignIn;
		currentUser.signOut = auth.$signOut;
		currentUser.onChange = auth.$onAuthStateChanged;
		currentUser.onChange(authStateChange);
		return currentUser;

		function trySignIn(){
			auth
				.$signInWithPopup('google')
				.catch(authError);
		}

		function authStateChange(userData){
			currentUser.errors = null;
			if(userData){
				currentUser.isSignedIn = true;
				currentUser.lastSignedIn = Date.now();
				currentUser.populate(userData);
				currentUser.update();
			}else{
				currentUser.isSignedIn = false;
			}
		}

		function authError(error){
			currentUser.isSignedIn = false;
			currentUser.errors = (currentUser.errors || []);
			currentUser.errors.push(error);
		}
	}

})();
