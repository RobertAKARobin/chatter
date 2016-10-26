'use strict';

(function(){

	angular
		.module('chatter')
		.factory('Message', Message);

	Message.$inject = ['currentUser'];

	function Message(currentUser){

		var Message = MessageClass();
		return Message;

		function MessageClass(){
			var pub = MessageConstructor;
			return pub;
		}

		function MessageConstructor(){
			var message = this;
			message.user_id = '';
			message.timestamp = '';
			message.content = '';
		}

	}

})();
