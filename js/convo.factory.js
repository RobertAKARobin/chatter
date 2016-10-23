"use strict";

(function(){

	angular
		.module("chatter")
		.factory("Convo", Convo);

	Convo.$inject = ["$firebaseObject", "$firebaseArray", "fbdata", "currentUser", "Message"];

	function Convo($firebaseObject, $firebaseArray, fbdata, currentUser, Message){

		var Convo = ConvoClass();
		return Convo;

		function ConvoClass(){
			var pub = ConvoConstructor;
			pub.prototype = ConvoPrototype();
			pub.ref = fbdata.id("convo/convos");
			pub.find_all = find_all;
			return pub;

			function find_all(){
				return $firebaseArray(Convo.ref);
			}
		}

		function ConvoConstructor(){
			this.first_message = new Message();
		}

		function ConvoPrototype(){
			var pub = {};
			pub.create = create;
			return pub;

			function create(){
				var convo = this;
				convo.first_message.user_id = currentUser.id;
				convo.first_message.timestamp = Date.now();
				return Convo.ref.push(this);
			}
		}

	}

})();
