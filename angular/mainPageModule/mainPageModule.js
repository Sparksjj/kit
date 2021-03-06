angular.module("mainPageModule", [])
.controller('mainPageController', ['$scope', '$rootScope', 'getRequest', 'postRequest',"$timeout",
function($scope, $rootScope, getRequest, postRequest, $timeout){
	$scope.allContent;
	$scope.offers;
	$scope.current;
	$scope.currentDisc;
	$scope.vip = false;

	$scope.moneyBackOptions;
	$scope.resPeriodOptions;
	$scope.payTypeOptions;

	$scope.bonuseType = {
		"one": false,
		"two": true,
		"three": false,
	};

	$scope.oldCost = {
		/*first slide*/
		phone: 49430,
		/*second slide*/
		tv: 29464,
		/*third slide*/
		bike: 29625,
	};

	$scope.newCost = {
		/*first slide*/
		phone: 49430,
		/*second slide*/
		tv: 29464,
		/*third slide*/
		bike: 29625,
	};

	$scope.settingData = {
		overPercent: 0,
		currentMoneyBack: 0,
		currentMoneyBackId: false,
		currentResPeriod: 0,
		currentResPeriodId: false,
		currentPayType: 0,
		currentPayTypeId: false,
	};

	$scope.benefit;

	$scope.getNewCost = function(){

		if ($scope.currentDisc) {		

			if ($scope.bonuseType.one) {

				var phone = $scope.oldCost.phone-($scope.oldCost.phone/100*($scope.current.loyaltyTariff.greenDiscount+$scope.settingData.overPercent));
				var bike = $scope.oldCost.bike-($scope.oldCost.bike/100*($scope.current.loyaltyTariff.redDiscount+$scope.settingData.overPercent));
				var tv = $scope.oldCost.tv-($scope.oldCost.tv/100*($scope.current.loyaltyTariff.yellowDiscount+$scope.settingData.overPercent));

				if ($scope.current.loyaltyTariff.greenDiscount+$scope.settingData.overPercent > 0) {
					var phone = $scope.oldCost.phone;
				}

				if ($scope.current.loyaltyTariff.yellowDiscount+$scope.settingData.overPercent > 0) {
					var bike = $scope.oldCost.bike;
				}

				if ($scope.current.loyaltyTariff.redDiscount+$scope.settingData.overPercent > 0) {
					var tv = $scope.oldCost.tv;
				}	

				$scope.newCost = {
					phone: Math.round(phone),
					bike: Math.round(bike),
					tv: Math.round(tv),
				};

			}else if($scope.bonuseType.two)	{

				var phone = $scope.oldCost.phone-($scope.oldCost.phone/100*($scope.current.loyaltyTariff.greenDiscount+$scope.settingData.overPercent));
				var bike = $scope.oldCost.bike-($scope.oldCost.bike/100*($scope.current.loyaltyTariff.redDiscount+$scope.settingData.overPercent));
				var tv = $scope.oldCost.tv-($scope.oldCost.tv/100*($scope.current.loyaltyTariff.yellowDiscount+$scope.settingData.overPercent));

				if ($scope.current.loyaltyTariff.greenDiscount+$scope.settingData.overPercent > 0) {
					var phone = phone+($scope.oldCost.phone-phone)/2
				}

				if ($scope.current.loyaltyTariff.yellowDiscount+$scope.settingData.overPercent > 0) {
					var bike = bike+($scope.oldCost.bike-bike)/2;
				}

				if ($scope.current.loyaltyTariff.redDiscount+$scope.settingData.overPercent > 0) {
					var tv = tv+($scope.oldCost.tv-tv)/2;
				}

				$scope.newCost = {
					phone: Math.round(phone),
					bike: Math.round(bike),
					tv: Math.round(tv),
				};

			}else{				
				$scope.newCost = {
					phone: Math.round($scope.oldCost.phone-($scope.oldCost.phone/100*($scope.current.loyaltyTariff.greenDiscount+$scope.settingData.overPercent))),
					bike: Math.round($scope.oldCost.bike-($scope.oldCost.bike/100*($scope.current.loyaltyTariff.redDiscount+$scope.settingData.overPercent))),
					tv: Math.round($scope.oldCost.tv-($scope.oldCost.tv/100*($scope.current.loyaltyTariff.yellowDiscount+$scope.settingData.overPercent))),
				};
			}	
		}

	}

	$scope.initSettingSide = function(){
		$timeout(function(){
			$scope.getDefoltSettingValue();
			$scope.allContent.offers.forEach(function(el, i){
				if (el.name == $scope.current.name) {
					console.log($scope.getSettingPosition(i, $scope.allContent.offers.length))
					$('.point_top').css('left', $scope.getSettingPosition(i, $scope.allContent.offers.length))
				}
			})
		}, 100);
	}
	$scope.getDefoltSettingValue = function(){	
		$scope.defoltSettings();
		$scope.refreshPoints($scope.payTypeOptions, '.reserve_4');	
		$scope.refreshPoints($scope.resPeriodOptions, '.reserve_2');
		$scope.refreshPoints($scope.moneyBackOptions, '.reserve_3');	
	}

	$scope.defoltSettings = function(){	
		$scope.settingData = {
			overPercent: 0,
			currentMoneyBack: 0,
			currentMoneyBackId: false,
			currentResPeriod: 0,
			currentResPeriodId: false,
			currentPayType: 0,
			currentPayTypeId: false,
		};	
	}

	$scope.refreshPoints = function(data, point){
		data.values.sort(function(prec, next){
			return prec.optionDiscount > next.optionDiscount;
		})
		data.values.forEach(function(el, i){
			if(el.optionDiscount == 0){
				$(point).css('left', $scope.getSettingOverPosition(i, data.values.length));
			}
		})
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

	$scope.getOptions = function(data){
		$scope.allContent.options.forEach(function(el, i){
			switch(el.optionName){
				case "Период резервирования":
					$scope.resPeriodOptions = el;
				break;
				case "Способ оплаты":
					$scope.payTypeOptions = el;
				break;
				case "MONEYBACK":
					$scope.moneyBackOptions = el;
				break;
			}
		})
	}

	getRequest.getContent().then(function(res){
		console.log(res.data);
		$scope.allContent = res.data;
		$scope.offers = $scope.findForCurrent(res.data.offers);
		$scope.current = $scope.offers[1];
		$scope.currentDisc = $scope.current.loyaltyTariff.greenDiscount;
/*		console.log($scope.current);*/
      	$scope.addScript();
      	$scope.getNewCost();
      	$scope.getBenefit();
      	$scope.getOptions();
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
		$scope.getNewCost();
		$scope.getBenefit();
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
		$scope.getNewCost();
	};
	$scope.changeDiscont = function(id){	
		if ($scope.current) {			
			$scope.currentDisc = $scope.current.loyaltyTariff[id];
		}
	};

	$scope.changeCurrentKitInPeriod = function(kit){	
		$scope.current = kit;
		$scope.getNewCost();
		$scope.getBenefit();
		$scope.getDefoltSettingValue();
	};

	$scope.getSettingPosition = function(i, length){
		if (i==0) {
			return '0%';
		}else if(i==length-1){
			return '99.9%';
		}else{
			if ((i+1) <= (length/2)) {
				return (((100/(length-1))*(i))-5*i)+"%";
			}else{
				return (((100/(length-1))*(i))+5*(length-i-1))+"%";
			}
		}
	};

	$scope.getSettingOverPosition = function(i, length, obj, point){
		var pos;
		if (i==0) {
			pos = '0%';
		}else if(i==length-1){
			pos = '99.9%';
		}else if(i==Math.floor((length-1)/2)){
			pos = '50%';
		}else{
			if ((i+1) <= (length/2)) {
				pos = (((100/(length-1))*(i))-5*i)+"%";
			}else{
				pos = (((100/(length-1))*(i))+5*(length-i-1))+"%";
			}
		}
		return pos;
	};

	$scope.getBenefit = function(){
		$scope.benefit = Math.round($scope.current.loyaltyTariff.maxVolume/100*($scope.current.loyaltyTariff.redDiscount+$scope.settingData.overPercent));		
	}

	$scope.changeResPeriod = function(res, type){
		$scope.settingData.overPercent -= $scope.settingData[type];
		$scope.settingData.overPercent += res.optionDiscount;
		$scope.settingData[type] = res.optionDiscount;
		$scope.settingData[type+'Id'] = res.itemID;
		$scope.getBenefit();
		$scope.getNewCost();
	}
	$scope.getNewPersent = function(pers){
		if (pers + $scope.settingData.overPercent) {
			return pers + $scope.settingData.overPercent;
		}
		return '0';
	}
	$scope.showModal = function(id){
		$(id).modal('show');
	}
	
	$scope.sendJoin = function(){
		if (!$scope.allContent.user) {
			$scope.showModal('#myModal2');
		}else{
			/*wright settings discont*/
			$scope.current.options.reservationPeriodDiscountValue = $scope.settingData.currentResPeriod;
			$scope.current.options.paymentMethodDiscountValue = $scope.settingData.currentPayType;
			/*wright settings id*/
			$scope.current.options.moneyBackId = $scope.settingData.currentMoneyBackId ? $scope.settingData.currentMoneyBackId : $scope.current.options.moneyBackId;
			$scope.current.options.reservationPeriodId = $scope.settingData.currentResPeriodId ? $scope.settingData.currentResPeriodId : $scope.current.options.reservationPeriodId;
			$scope.current.options.paymentMethodId = $scope.settingData.currentPayTypeId ? $scope.settingData.currentPayTypeId : $scope.current.options.paymentMethodId;

			if ($scope.bonuseType.one) {
				$scope.current.options.bonusId = 1;
				$scope.current.options.bonusTitle = "100% бонусов на счёт";
			}else if($scope.bonuseType.two){
				$scope.current.options.bonusId = 2;
				$scope.current.options.bonusTitle = "50% на счёт, 50% в скидку";
			}else{
				$scope.current.options.bonusId = 3;
				$scope.current.options.bonusTitle = "100% бонусов в скидку";
			}
			
			postRequest.sendJoin($scope.current).then(function(res){
				console.log(res);
			}, function(err){
				console.log(err);
			});
		}
	}
	$scope.changeAgent = function(data){
		postRequest.changeAgent(JSON.parse(data)).then(function(res){
			console.log(res);
		}, function(err){
			console.log(err);
		});
	}
	$scope.sendProme = function(code){
		console.log(code)
	}
	$scope.clickCansel = function(){
		$scope.defoltSettings();
			$scope.allContent.offers.forEach(function(el, i){
			if(el.name == "Синий кит"){
				$scope.current = el;
				$scope.getNewCost();
				$scope.getBenefit();
			}
		})
	}

	$scope.oneStepKit = function(n){
		var id = $scope.current.id;
		$scope.allContent.offers.forEach(function(el, i){
			
			if (i == 0 && n == -1) {
				return;
			}else if (i == $scope.allContent.offers.length-1 && n == 1) {
				return;
			}
			if(el.id == id){
				step = false;
				$scope.current = $scope.allContent.offers[i+n];
				$('.point_top').css({'left': $scope.getSettingPosition(i+n, $scope.allContent.offers.length), transition: '1s'});
				$scope.getNewCost();
				$scope.getBenefit();
				$scope.getDefoltSettingValue();
			}
		})

	}
	$scope.getBonuse = function(disc, item){
		if(disc + $scope.settingData.overPercent < 0){return 0};
		var data = {
			'phone': $scope.oldCost.phone-($scope.oldCost.phone/100*($scope.current.loyaltyTariff.greenDiscount+$scope.settingData.overPercent)),
			'bike': $scope.oldCost.bike-($scope.oldCost.bike/100*($scope.current.loyaltyTariff.redDiscount+$scope.settingData.overPercent)),
			'tv': $scope.oldCost.tv-($scope.oldCost.tv/100*($scope.current.loyaltyTariff.yellowDiscount+$scope.settingData.overPercent)),
		};
		if ($scope.bonuseType.one) {
			return Math.round(($scope.oldCost[item]-data[item]));
		}else if($scope.bonuseType.two){
			return Math.round(($scope.oldCost[item]-data[item])/2);
		}else{
			return 0;
		}
	}
}])
.filter('numberSapce', function(){
     return function(param){
        if (param == undefined){return}
        return param.toString().split("").reverse().join("").replace(/\d{3}/g, '$& ').split("").reverse().join("");
    }
})
.filter('addEnding', function(){
     return function(param){
        if (param == undefined){return}
        return param[ (param[3]%10==1 && param[3]%100!=11 ? 0 : param[3]%10>=2 && param[3]%10<=4 && (param[3]%100<10 || param[3]%100>=20) ? 1 : 2) ];
    }
});