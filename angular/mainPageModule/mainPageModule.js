angular.module("mainPageModule", [])
.controller('mainPageController', ['$scope', '$rootScope', 'getRequest',
function($scope, $rootScope, getRequest){
	$scope.content;
	getRequest.getContent().then(function(res){
		console.log(res)
	})
	$scope.changeHeight = function(){
		var def = 1540;
		if ($('.box').css('height') == def+'px') {
			$('.box').css('height', (def+$('.container_main_item_box').height())+'px');
		}else{
			$('.box').css('height', '');			
		}
	}
}])