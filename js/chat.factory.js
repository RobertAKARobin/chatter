"use strict";

(function(){

	angular
		.module("chatter")
		.factory("Chat", Chat);

	Chat.$inject = ["$firebaseObject", "fbdata", "ChatListItem"];

	function Chat($firebaseObject, fbdata, ChatListItem){

		var Chat = ChatClass();
		return Chat;

		function ChatClass(){
			var pub = $firebaseObject.$extend(ChatPrototype());
			pub.ref = fbdata.id("chat");
			pub.create = create;
			pub.sanitize = sanitize;
			return pub;

			function create(chat){
				var chatData = Chat.sanitize(chat);
				return Chat.ref.push(chatData);
			}

			function sanitize(object){
				var output = {},
						property,
						properties = [
					"name",
					"chat_list_id"
				];
				for(var i = 0, l = properties.length; i < l; i++){
					property = properties[i];
					output[property] = (object[property] || "");
				}
				return output;
			}
		}

		function ChatPrototype(){
			var pub = {};
			return pub;
		}

	}

})();
