"use strict";

(function(){

	angular
		.module("chatter")
		.factory("ChatList", ChatList);

	ChatList.$inject = ["$firebaseArray", "fbdata"];

	function ChatList($firebaseArray, fbdata){

		var ChatList = ChatListClass();
		return ChatList;

		function ChatListClass(){
			var pub = $firebaseArray.$extend(ChatListPrototype());
			pub.ref = fbdata.id("chat_list");
			pub.load = load;
			return pub;

			function load(){
				return new ChatList(ChatList.ref);
			}
		}

		function ChatListPrototype(){
			var pub = {};
			return pub;
		}

	}

})();
