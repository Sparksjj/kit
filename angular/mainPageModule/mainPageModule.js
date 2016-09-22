angular.module("mainPageModule", [])
.controller('mainPageController', ['$scope', '$rootScope', 'getRequest',
function($scope, $rootScope, getRequest){
	$scope.allContent;
	$scope.offers;
	$scope.current;
	$scope.greenDiscount;
	$scope.vip = false;
	$scope.bonuseType = 2;

	getRequest.getContent().then(function(res){
		console.log(res);
		$scope.allContent = res.data;
		$scope.offers = res.data.offers.slice(2, 5);
		$scope.current = $scope.offers[1];
      	$scope.addScript();
		console.log($scope.offers)
		console.log($scope.current)
	});

	$scope.chekCurrentTariff = function(id){
		if ($scope.current.loyaltyTariff.productId == id) {
			return true;
		}
		return false;
	}

	$scope.changeCurrentTariff = function(number){
		$scope.current = $scope.offers[number];
	}
	
	$scope.changeHeight = function(){
		var def = 1540;
		if ($('.box').css('height') == def+'px') {
			$('.box').css('height', (def+$('.container_main_item_box').height())+'px');
		}else{
			$('.box').css('height', '');			
		}
	}

	$scope.getCurrentImg = function(){		
		if (!$scope.current) {return;};
		switch($scope.current.loyaltyTariff.productId){
			case 3887604:
				return 'big-kasatka.png';
			break;
			case 3887605:
				return 'big-kashalot.png';
			break;
			case 3887598:
				return 'big-kit.png';
			break;
			default:
				return 'big-monster.png';
			break;
		}
	};
	$scope.getCurrentIcon = function(id){		
		switch(id){
			case 3887604:
				return 'kasatka.png';
			break;
			case 3887605:
				return 'kashalot.png';
			break;
			case 3887598:
				return 'kit-icon.png';
			break;
			default:
				return 'kasatka.png';
			break;
		}
	};
	$scope.toggleRightNavigation = function(){	
		$('.top_bar #navigation .navbar-right').fadeToggle(100);
	};
	$scope.toogleVip = function(){	
		$scope.vip = !$scope.vip;
	};
	$scope.currentBonuse = function(id ,cur){	
		if (cur == id) {
			return true
		}else{
			return false;
		}
	};
	$scope.changeBonuseType = function(id){	
		$scope.bonuseType == id;
	};
}])