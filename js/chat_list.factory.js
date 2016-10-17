"use strict";

(function(){

	angular
		.module("chatter")
		.factory("ChatList", ChatList);

	ChatList.$inject = ["$firebaseArray", "fbdata"];

	function ChatList($firebaseArray, fbdata){

		var ChatList = $firebaseArray.$extend(ChatListPrototype());
		ChatList.ref = fbdata.id("chat_list");
		ChatList.load = load;
		return ChatList;

		function load(){
			return new ChatList(ChatList.ref);
		}

		function newChat(){

		}

		function ChatListPrototype(){
			var pub = {};
			return pub;
		}

	}

})();
