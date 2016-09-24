angular.module("mainPageModule", [])
.controller('mainPageController', ['$scope', '$rootScope', 'getRequest',"$timeout",
function($scope, $rootScope, getRequest, $timeout){
	$scope.allContent;
	$scope.offers;
	$scope.current;
	$scope.currentDisc;
	$scope.vip = false;

	$scope.bonuseType = {
		"one": false,
		"two": true,
		"three": false,
	};

	$scope.oldCost = {
		phone: 50000,
		bike: 30000,
		tv: 40000,
	};
	$scope.newCost = {
		phone: 50000,
		bike: 30000,
		tv: 40000,
	};

	$scope.getNewCost = function(){
		if ($scope.currentDisc) {		
			$scope.newCost = {
				phone: $scope.oldCost.phone-($scope.oldCost.phone/100*$scope.currentDisc),
				bike: $scope.oldCost.bike-($scope.oldCost.bike/100*$scope.currentDisc),
				tv: $scope.oldCost.tv-($scope.oldCost.tv/100*$scope.currentDisc),
			};	
		}
	}

	$scope.findForCurrent = function(data){
		var offers = [];
		data.forEach(function(el, i){
			switch(el.name){
				case "Косатка":
				offers[0] = el;
				break;
				case "Синий кит":
				offers[1] = el;
				break;
				case "Кашалот":
				offers[2] = el;
				break;
			}
		})
		return offers;
	}
	getRequest.getContent().then(function(res){
		console.log(res);
		$scope.allContent = res.data;
		$scope.offers = $scope.findForCurrent(res.data.offers);
		$scope.current = $scope.offers[1];
		$scope.currentDisc = $scope.current.loyaltyTariff.greenDiscount;
      	$scope.addScript();
      	$scope.getNewCost();
		console.log($scope.offers);
		console.log($scope.current);
	}, function(){
		$('.box').css('height', $('.box_greeting').height());
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

	$scope.changeBonuseType = function(id){	

		$scope.bonuseType = {
			"one": false,
			"two": false,
			"three": false,
		};
		$scope.bonuseType[id] = true;
	};
	$scope.changeDiscont = function(id){	
		$scope.currentDisc = $scope.current.loyaltyTariff[id];
		$scope.getNewCost();
	};

}])