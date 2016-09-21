autorization.factory('security', function(){

	var showLogin = function(){
		$('#signInButton').trigger('click');
	};

	var canselLogin = function(){
		$('#canselLogin').trigger('click');
	};

	var currentUser = function(){
		return [];
	};

	var login = function(email, password){

	};

	var logout = function(redirectTo){

	};

	var canselLogin = function(redirectTo){

	};

	return {
		showLogin: showLogin,
	}
});