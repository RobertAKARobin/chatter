"use strict";

(function(){

	angular
		.module("chatter")
		.factory("Chat", Chat);

	Chat.$inject = ["$firebaseObject", "fbdata", "ChatList"];

	function Chat($firebaseObject, fbdata, ChatList){

		var Chat = angular.extend(
			$firebaseObject.$extend(ChatPrototype()),
			ChatClass()
		);
		return Chat;

		function ChatClass(){
			var pub = {};
			pub.ref = fbdata.id("chat");
			pub.new = newChat;
			return pub;

			function newChat(){
				return {
					save: saveNewChat
				}
			}

			function saveNewChat(){
				var chat = this;
				chat.save = null;
				Chat.ref.push(chat);
				ChatList.ref.push(chat);
			}
		}

		function ChatPrototype(){
			var pub = {};
			return pub;
		}

	}

})();
