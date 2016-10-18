"use strict";

(function(){

	angular
		.module("chatter")
		.factory("ChatNew", ChatNew);

	ChatNew.$inject = ["Chat", "ChatListItem"];

	function ChatNew(Chat, ChatListItem){

		var ChatNew = ChatNewClass();
		return ChatNew;

		function ChatNewClass(){
			var pub = function(){};
			pub.prototype = ChatNewPrototype();
			pub.create = create;
			return pub;

			function create(){
				return new ChatNew();
			}
		}

		function ChatNewPrototype(){
			var pub = {};
			pub.save = save;
			return pub;

			function save(){
				var chatData = Chat.sanitize(this);
				var chat = Chat.create(chatData);
				var chatListItem = ChatListItem.create(chatData);
				chat.update({chat_list_id: chatListItem.key});
				chatListItem.update({chat_id: chat.key});
			}
		}

	}

})();
