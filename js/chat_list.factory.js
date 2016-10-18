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
			pub.add = add;
			pub.sanitize = sanitize;
			return pub;

			function load(){
				return new ChatList(ChatList.ref);
			}

			function add(chat){
				var chatListItemData = ChatList.sanitize(chat);
				return ChatList.ref.push(chatListItemData);
			}

			function sanitize(object){
				var output = {},
						property,
						properties = [
					"name",
					"chat_id"
				];
				for(var i = 0, l = properties.length; i < l; i++){
					property = properties[i];
					output[property] = (object[property] || "");
				}
				return output;
			}
		}

		function ChatListPrototype(){
			var pub = {};
			return pub;
		}

	}

})();
