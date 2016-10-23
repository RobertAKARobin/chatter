"use strict";

(function(){

	angular
		.module("chatter")
		.factory("Convo", Convo);

	Convo.$inject = ["$firebaseObject", "$firebaseArray", "fbdata"];

	function Convo($firebaseObject, $firebaseArray, fbdata){

		var Convo = ConvoClass();
		return Convo;

		function ConvoClass(){
			var pub = $firebaseObject.$extend(ConvoPrototype());
			pub.ref = fbdata.id("convo/convos");
			pub.find_all = find_all;
			pub.save = save;
			pub.sanitize = sanitize;
			return pub;

			function find_all(){
				return $firebaseArray(Convo.ref);
			}

			function save(newConvo){
				var newConvoData = Convo.sanitize(newConvo);
				return Convo.ref.push(newConvoData);
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

		function ConvoPrototype(){
			var pub = {};
			return pub;
		}

	}

})();
