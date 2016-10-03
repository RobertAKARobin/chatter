(function(){

	angular
		.module("chatter")
		.controller("MainController", MainController);

	MainController.$inject = ["$firebaseObject", "$firebaseArray"];

	function MainController($firebaseObject, $firebaseArray){
		var vm = this,
				db = firebase.database().ref();
		vm.messages = $firebaseArray(db.child("messages"));
		vm.addnewmessage = function(){
			vm.messages.$add({
				content: vm.newmessage
			});
		}
	}

})();
