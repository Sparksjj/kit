angular.module("mainPageModule", [])
.controller('mainPageController', ['$scope', '$rootScope', 'getRequest',
function($scope, $rootScope, getRequest){
	$scope.content;
	getRequest.getContent().then(function(res){
		console.log(res)
	})
}])