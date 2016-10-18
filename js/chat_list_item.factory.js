"use strict";

(function(){

	angular
		.module("chatter")
		.factory("ChatListItem", ChatListItem);

	ChatListItem.$inject = ["ChatList"];

	function ChatListItem(ChatList){

		var ChatListItem = ChatListItemClass();
		return ChatListItem;

		function ChatListItemClass(){
			var pub = function(){};
			pub.create = create;
			pub.sanitize = sanitize;
			return pub;

			function create(chat){
				var chatListItemData = ChatListItem.sanitize(chat);
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

	}

})();
