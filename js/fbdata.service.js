"use strict";

(function(){

	angular
		.module("chatter")
		.service("fbdata", fbdata);

	fbdata.$inject = ["$firebaseObject", "$firebaseArray"];

	function fbdata($firebaseObject, $firebaseArray){
		var root = firebase.database().ref(),
				chats = root.child("chats"),
				service = {
					getChat: getChat
				};
		return service;

		function getChat(chatName){
			return $firebaseArray(chats.child(chatName));
		}
	}

})();
