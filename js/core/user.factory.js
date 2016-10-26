'use strict';

(function(){

	angular
		.module('app.core')
		.factory('User', User);

	User.$inject = ['fbdata'];

	function User(fbdata){

		var User = UserClass();
		return User;

		function UserClass(){
			var pub = UserConstructor;
			pub.prototype = UserPrototype();
			pub.ref = fbdata.id('users');
			return pub;
		}

		function UserConstructor(){
			var user = this;
		}

		function UserPrototype(){
			var pub = {};
			pub.populate = populate;
			pub.update = update;
			return pub;

			function populate(input){
				var user = this;
				user.displayName	= (input.displayName || '');
				user.uid					= (input.uid || '');
				user.photoURL			= (input.photoURL || '');
				return user;
			}

			function update(){
				var user = this,
						data = {};
				data[user.uid] = JSON.parse(JSON.stringify(user));
				User.ref.update(data);
			}
		}

	}

})();
