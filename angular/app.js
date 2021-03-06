var app = angular.module("myApp", ['ngRoute', 'mainPageModule', 'ngOdometer'])

    .config(function($routeProvider, $httpProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'views/mainPage.html',
              controller: 'mainPageController',
          })
          .otherwise({ 
            redirectTo: '/'
          });
          //$httpProvider.defaults.useXDomain = true;
          //delete $httpProvider.defaults.headers.common['X-Requested-With'];
          $httpProvider.defaults.withCredentials = true;
     })

    .controller('appCtrl', ['$scope', "$rootScope", "$timeout", 'addJquery',
    function($scope, $rootScope, $timeout, addJquery) {

        $scope.init = function(){
            $('.box').css('height', $('.box_greeting').height());
        }

        $scope.addScript = function(){
            $timeout(function(){addJquery.addJquery()}, 50);
        };

    }])

    .factory('getRequest', ['$http', function($http){

        var domen = "http://dzdev13-public.ulmart.ru";

        var getContent = function(){
            return $http({
              method: 'GET',
              url: domen + '/loyalty/settings',
            });
        };

        return{
            getContent: getContent
        }

    }])

    .factory('postRequest', ['$http', function($http){

        var domen = "http://dzdev13-public.ulmart.ru";

        var sendJoin = function(data){
            return $http({
              method: 'POST',
              url: domen + '/loyalty/join',
              data: data,
            });
        };
        var changeAgent = function(data){
            return $http({
              method: 'POST',
              url: domen + '/loyalty/agent',
              data: data,
            });
        };

        return{
            sendJoin: sendJoin,
            changeAgent: changeAgent
        }

    }])

    .factory('addJquery', [function(){

        var addJquery = function(){

$('.question > a').tooltip({
        animation: false,
        container: 'body'
    });

            $('.green_btn').click(function () {
                color = GREEN;
                
                /*refreshBannerSlide();*/

                var offset = 0;
                $('.banner_main_slider').animate({
                    scrollTop: offset,
                }, 'slow', function () {
                    //код по завершении анимации
                });

                $('.green_btn,.orange_btn,.purple_btn').removeClass('active_btn');
                $('.green_btn').addClass('active_btn');

            });


            $('.orange_btn').click(function () {

                color = ORANGE;
                /*refreshBannerSlide();*/

                var offset = $('.box_greeting').find('.banner_main_slider').height();
                var offset_setting = $('.box_settings').find('.banner_main_slider').height();

                $('.box_greeting').find('.banner_main_slider').animate({
                    scrollTop: offset,
                }, 'slow', function () {
                    //код по завершении анимации
                });

                $('.box_settings').find('.banner_main_slider').animate({
                    scrollTop: offset_setting,
                }, 'slow', function () {
                    //код по завершении анимации
                });

                $('.green_btn,.orange_btn,.purple_btn').removeClass('active_btn');
                $('.orange_btn').addClass('active_btn');
            });

            $('.purple_btn').click(function () {

                color = PURPLE;

               /* refreshBannerSlide();
            */
                var offset = $('.box_greeting').find('.banner_main_slider').height() * 2;
                var offset_setting = $('.box_settings').find('.banner_main_slider').height() * 2;

                $('.box_greeting').find('.banner_main_slider').animate({
                    scrollTop: offset,
                }, 'slow', function () {
                    //код по завершении анимации
                });

                $('.box_settings').find('.banner_main_slider').animate({
                    scrollTop: offset_setting,
                }, 'slow', function () {
                    //код по завершении анимации
                });

                $('.green_btn,.orange_btn,.purple_btn').removeClass('active_btn');
                $('.purple_btn').addClass('active_btn');
            });


            $('.point_first, .point_second, .point_third, .point_fourth').click(function () {
             
                var pos_left = $(this).position().left;
                $('.point_top').css({
                    left: pos_left,
                    transition: '1s'
                });
                
            })


            $('.point_left_2').click(function () {
                var pos_left = $(this).position().left;
                $('.reserve_2').css({
                    left: pos_left,
                    transition: '1s'
                });
            });

            $('.point_left_3').click(function () {
                var pos_left = $(this).position().left;
                $('.reserve_3').css({
                    left: pos_left,
                    transition: '1s'
                });
            });

            $('.point_left_4').click(function () {
                var pos_left = $(this).position().left;
                $('.reserve_4').css({
                    left: pos_left,
                    transition: '1s'
                });
            });


            $('.modal_1_toggle').click(function () {
                $('.modal_1_window_id').css('display', 'flex');
                $('.modal_1_window_id').addClass('modal_1');
            });

            $('.modal_1_window_close').click(function () {
                $('.modal_1_window_id').css('display', 'none');
            });

            $('.modal_2_toggle').click(function () {
                $('.modal_2_window_id').css('display', 'flex');
                $('.modal_2_window_id').addClass('modal_2');
            });

            $('.modal_2_window_close').click(function () {
                $('.modal_2_window_id').css('display', 'none');
            });

            $('.modal_3_toggle').click(function () {
                $('.modal_3_window_id').css('display', 'flex');
                $('.modal_3_window_id').addClass('modal_3');
            });

            $('.modal_3_window_close').click(function () {
                $('.modal_3_window_id').css('display', 'none');
            });

            $('.modal_4_toggle').click(function () {
                $('.modal_4_window_id').css('display', 'flex');
                $('.modal_4_window_id').addClass('modal_4');
            });

            $('.modal_4_window_close').click(function () {
                $('.modal_4_window_id').css('display', 'none');
            });


            //  Шестерёнки
            $('.screw_1').click(function () {
                scrollBlockToLeft();
            });


            $('.screw_2').click(function () {
                scrollBlockToLeft();
            });


            $('.screw_3').click(function () {
                scrollBlockToLeft();
            });
            ////точки слева для перехода по слайдам


            $('.to_block_2').click(function () {
                var topOffset = $('.slide_1').outerHeight(true);
                $('html, body').animate({
                    scrollTop: topOffset
                }, 'slow' )

                dott();
            });


            $('.to_block_3, .slide_2_wrapper_point_dott:nth-child(3)').click(function () {
                var topOffset = $('.slide_1').outerHeight(true) + $('.slide_2').outerHeight(true);
                $('html, body').animate({
                    scrollTop: topOffset
                }, 'slow' )
            });


            $('.to_block_4').click(function () {
                var topOffset = $('.slide_1').outerHeight(true) + $('.slide_2').outerHeight(true) + $('.slide_3').outerHeight(true);
                $('html, body').animate({
                    scrollTop: topOffset
                }, 'slow' )
            });

            $('.scroll_to_top').click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow' )

            });

            $('.top_to_1').click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow' )
            });

            $('.top_to_2').click(function () {
                var topOffset = $('.slide_1').outerHeight(true);
                $('html, body').animate({
                    scrollTop: topOffset,
                }, 'slow' )

            });


            //шестеренка и переход на страницу с предустановленными программами
            $('.screw_1').on('click', function () {

            });
            //шестеренка и переход на страницу с предустановленными программами

            $('.container_main_item_turn_block').click(function () {
                $('.container_main_item_turn_block span').each(function(k, v) {
                   $(v).text() == 'Свернуть'?$(v).text('Подробнее'):$(v).text('Свернуть'); 
                });
                
                $('.container_main_item_box').slideToggle(400, function(){
                    $('.box').animate({height: $('.box_greeting').height()}, 100)
                });
                $('.container_main_item_turn_block img').toggleClass('turn_rotate');

                //увеличиваем блок box_greeting чтобы корректно отображался выпадающий список
                var box       = $('.box'),
                    boxH = $('.box').height();

                if( boxH == 1050 ) {
                    box.css({
                        'height': '1300',
                        'transition': '.45s'
                    });
                } else if ( boxH == 1300 ) {
                    box.css({
                        'height': '1050',
                        'transition': '1.4s'
                    });
                }
            });

            $('.create_taksa_btn').click( function () {
                scrollBlockToLeft();
            })

            function getVal(valName, numVal) {
                return eval(valName + numVal);
            }
            ///////////////переход на страницу настроек

            $('.cancel_btn').click(function () {
                $('.box .box_settings .slide_2_wrapper_point').css('display', 'none');
                $('.box').css('height', $('.box_greeting').height());

                var topOffset = 0;
                $('html, body').animate({
                    scrollTop: topOffset
                }, 'slow' )

                $('.box_greeting').animate({
                    left: '0'
                }, 'slow' )
                $('.box_settings').animate({
                    left: '210%'
                }, 'slow' );

                $(window).resize(function () {
                    $('.box').animate({
                        scrollLeft: 0,
                    }, 0, function () {
                        //код по завершении анимации
                    });
                });
/*
                                var topOffset = 0;
                $('html, body').animate({
                    scrollTop: topOffset
                }, 'slow' )*/

                $('.green_btn').click();

            });

            var GREEN = 1;
            var ORANGE = 2;
            var PURPLE = 3;

            //страница настроек
            var pos = 3,
                reserve_1 = 1,
                reserve_2 = 1;

            //страница настроек

            /////////стартовая выгрузка
            var taksa = 3;
            var taksaStep = taksa;
            var color = 1;

            var colorArray =[];
                colorArray['green'] = 1;
                colorArray['orange'] = 2;
                colorArray['purple'] = 3;

            var intColorArray =[];
                intColorArray[1] = 'green';
                intColorArray[2] = 'orange';
                intColorArray[3] = 'purple';

            // new
            var settingPage = false;
            var percentReserve1 = false;
            var percentReserve2 = false;



            function recalculateCounter () {
                counterArray[1] = (limit_1 * purple_percent_1) / 100;
                counterArray[2] = (limit_2 * purple_percent_2) / 100;
                counterArray[3] = (limit_3 * purple_percent_3) / 100;
                counterArray[4] = (limit_4 * purple_percent_4) / 100;
            }

            // Обновление % по цветам
            function updateSpansAndPercents() {
                    $('.result_num span').text(getVal('cost_', taksa));
                    $('.counter span').text(counterArray[taksa]);
                    $('.green_percent').text(getPercent(1));
                    $('.orange_percent').text(getPercent(2));
                    $('.purple_percent').text(getPercent(3));
            }

            function scrollBlockToLeft() {
                $('.box .box_settings .slide_2_wrapper_point').css('display', 'block');

                var topOffset = 0;
                $('html, body').animate({
                    scrollTop: topOffset
                }, 'slow' )
/*
                var leftOffset = $(window).width()+20;
                $('.box').animate({
                    scrollLeft: leftOffset
                }, 'slow' )*/

                $('.box_greeting').animate({
                    left: '-110%'
                }, 'slow' )
                $('.box_settings').animate({
                    left: '0'
                }, 'slow' );
                $('.box').css('height','auto');
            }

            ///переходы по точкам
            function dott(){
                $('.slide_2_wrapper_point').css({
                    'display':'block',
                    'position':'fixed',
                    'top':'50%',
                    'left':'5%',
                    'z-index':'1'
                });
            }

            ///боковое меню
                $(window).scroll(function() {

                    var posOffset = $(window).scrollTop();

                    $('.slide_2_wrapper_point_dott').removeClass('slide_2_wrapper_point_circle');

                     if (posOffset < $('.slide_1').outerHeight(true)) {
                         $('.slide_2_wrapper_point_dott:nth-child(1)').addClass('slide_2_wrapper_point_circle');
                    } else if (posOffset < $('.slide_1').outerHeight(true) + $('.slide_2').outerHeight(true)) {
                         $('.slide_2_wrapper_point_dott:nth-child(2)').addClass('slide_2_wrapper_point_circle');
                    } else if (posOffset < $('.slide_1').outerHeight(true) + $('.slide_2').outerHeight(true) + $('.slide_3').outerHeight(true)) {
                         $('.slide_2_wrapper_point_dott:nth-child(3)').addClass('slide_2_wrapper_point_circle');
                    } else {
                         $('.slide_2_wrapper_point_dott:nth-child(4)').addClass('slide_2_wrapper_point_circle');
                    }
                })

            //переходы

            var winH = $(window).height();

                $('.slide_2_wrapper_point_dott:nth-child(1)').click( function(){
                    $('html, body').animate({
                        scrollTop: 0,
                    }, 'slow' )
                });

                $('.slide_2_wrapper_point_dott:nth-child(2)').click( function(){
                    $('html, body').animate({
                        scrollTop: $('.slide_1').outerHeight(true),
                    }, 'slow' )
                });

                $('.slide_2_wrapper_point_dott:nth-child(3)').click( function(){
                    $('html, body').animate({
                        scrollTop: $('.slide_1').outerHeight(true) + $('.slide_2').outerHeight(true),
                    }, 'slow' )
                });

                $('.slide_2_wrapper_point_dott:nth-child(4)').click( function(){
                    $('html, body').animate({
                        scrollTop: $('.slide_1').outerHeight(true) + $('.slide_2').outerHeight(true) + $('.slide_3').outerHeight(true),
                    }, 'slow' )
                });

            //переходы

            $('.taksa_1').click( function () {
                $('.taksa_head').css({
                    'left':'30%',
                    'transition':'.8s'
                });

                $('.orange_block').css({
                    'width':'15%',
                    'left':'40%',
                    'transition':'.8s'
                });

                $('.taksa_back').css({
                    'left':'55%',
                    'transition':'.8s'
                });

                $('.logo_main_container_promo_btn').css({
                    'left':'14%',
                    'transition':'.8s'
                });

                $('.logo_circle_1').css({
                    'left':'27%',
                    'transition':'.8s'
                });

                $('.logo_circle_2').css({
                    'left':'28%',
                    'transition':'.8s'
                });

                $('.shadow_block').css({
                    'width':'14%',
                    'left':'42%',
                    'transition':'.8s'
                });
            });

            $('.taksa_3, .cancel_btn').click( function () {
                $('.taksa_head').css({
                    'left':'25%',
                    'transition':'.8s'
                });

                $('.orange_block').css({
                    'width':'30%',
                    'left':'35%',
                    'transition':'.8s'
                });

                $('.taksa_back').css({
                    'left':'60%',
                    'transition':'.8s'
                });

                $('.logo_main_container_promo_btn').css({
                    'left':'9%',
                    'transition':'.8s'
                });

                $('.logo_circle_1').css({
                    'left':'22%',
                    'transition':'.8s'
                });

                $('.logo_circle_2').css({
                    'left':'23%',
                    'transition':'.8s'
                });

                $('.shadow_block').css({
                    'width':'22%',
                    'left':'38%',
                    'transition':'.8s'
                });
            });

            $('.taksa_4').click( function () {
                $('.taksa_head').css({
                    'left':'20%',
                    'transition':'.8s'
                });

                $('.orange_block').css({
                    'width':'40%',
                    'left':'30%',
                    'transition':'.8s'
                });

                $('.taksa_back').css({
                    'left':'65%',
                    'transition':'.8s'
                });

                $('.logo_main_container_promo_btn').css({
                    'left':'4%',
                    'transition':'.8s'
                });

                $('.logo_circle_1').css({
                    'left':'17%',
                    'transition':'.8s'
                });

                $('.logo_circle_2').css({
                    'left':'18%',
                    'transition':'.8s'
                });

                $('.shadow_block').css({
                    'width':'33%',
                    'left':'33%',
                    'transition':'.8s'
                });
            });

            $('.collapse').on('hidden.bs.collapse', function () {
              $('.box').css('height', $('.box_greeting').height());
            })
            $('.collapse').on('shown.bs.collapse', function () {
              $('.box').css('height', $('.box_greeting').height());
            })

            $('.box').css('height', $('.box_greeting').height());
        }

        return{
            addJquery: addJquery,
        }

    }])
