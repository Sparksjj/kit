var app = angular.module("myApp", ['ngRoute', 'mainPageModule']);

  app.config(function($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'views/mainPage.html',
              controller: 'mainPageController',
          })
          .otherwise({ 
            redirectTo: '/'
          });
  })

  .controller('appCtrl', ['$scope', "$rootScope", "$timeout",
    function($scope, $rootScope, $timeout) {

      $scope.addScript = function(){
                    $timeout(function(){

    $('.question > a').tooltip({
        animation: true,
        delay: {"show": 100, "hide": 100},
        container: 'body'
    });

    $('a').on('click', function () {
        return false;
    });

    var arrow_pos_left = (parseInt($(window).width()) / 2 - 5);
    $('.to_block_2, .to_block_4').css({
        'left': arrow_pos_left,
        'bottom': '50px'
    });
    $(window).resize(function () {
        var arrow_pos_left = (parseInt($(window).width()) / 2 - 5);
        $('.to_block_2, .to_block_4').css({
            'left': arrow_pos_left,
            'bottom': '50px'
        });

    });
    var arrow_pos_left = (parseInt($(window).width()) / 2 - 10);

    $('.title_settings_dott, .slide_2_dott, .slide_3_dott, .slide_4_dott').css('left', arrow_pos_left);

    $(window).resize(function () {
        var arrow_pos_left = (parseInt($(window).width()) / 2 - 10);
        $('.title_settings_dott, .slide_2_dott, .slide_3_dott, .slide_4_dott').css('left', arrow_pos_left);
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



// $('.arrow_left').click (function() {
    
    
//     initDataSlide();
// });

// $('.arrow_right').click (function() {
    
    // initDataSlide();
// });


$('.arrow_right').click(function () {
    if(!noClick) {
        return;
    }

    if (taksaStep == 4) {
        return;
    }
    taksaStep++;
    taksa = taksaStep;

    noClick = false;
    if (($('.point_top').position().left) > (parseInt($('.slide_2_wrapper_item').css('width')) - 50)) {
        var width = parseInt($('.slide_2_wrapper_item').css('width'));
        $('.point_top').position().left = width;
    } else {

        var width = parseInt($('.slide_2_wrapper_item').css('width'));

        var p = $('.point_top');
        var offset = p.position().left;

        var left = offset + width / 3;
        p.css({
            left: left,
            transition: '1s'
        });
    }

    
    initDataSlide();

    setTimeout(function () {
        noClick = true;
    }, 1000);
});

var noClick = true;


$('.arrow_left').click(function () {
    if(!noClick) {
        return;
    }
    if (taksaStep == 1) {
        return;
    }
    taksaStep--;
    taksa = taksaStep;

    noClick = false;

    if (($('.point_top').position().left) < 50) {
        var width = parseInt($('.slide_2_wrapper_item').css('width'));

        $('.point_top').position().left = 0;
    } else {

        var width = parseInt($('.slide_2_wrapper_item').css('width'));

        var p = $('.point_top');
        var offset = p.position().left;
        var left = offset - width / 3;
        p.css({
            left: left,
            transition: '1s'
        });
    }

    

        // offset = Math.round($('.box .box_settings .slide_2_wrapper_item .point_top').position().left);
        // length = $('.slide_2_wrapper_item');

        // if (offset === 0) {
        //     taksa = 1;
        // } else if (offset === Math.round(length.width() / 3)) {
        //     taksa = 2;
        // } else if (offset === Math.round(length.width() / 3 * 2)) {
        //     taksa = 3;
        // } else if (offset === Math.round(length.width())) {
        //     taksa = 4;
        // }
        initDataSlide();
    setTimeout(function () {    
        noClick = true;
        
    }, 1000);
    

});

$('.point_first, .point_second, .point_third, .point_fourth').click(function () {
    if(!noClick) {
        return;
    }
    

    noClick = false;

     
        var pos_left = $(this).position().left;
        $('.point_top').css({
            left: pos_left,
            transition: '1s'

        });
    setTimeout(function () {
        noClick = true;

    }, 1000);
    
})

$('.point_first').click(function() {
    taksa = 1;

    initDataSlide();
});

$('.point_second').click(function() {
    taksa = 2;
    initDataSlide();
});

$('.point_third').click(function() {
    taksa = 3;
    initDataSlide();
});

$('.point_fourth').click(function() {
    taksa = 4;
    initDataSlide();
});




/////////////////////////////////
//блок кода требует оптимизации//


$('.point_left_1').click(function () {
    var pos_left = $(this).position().left;
    $('.reserve_1').css({
        left: pos_left,
        transition: '1s'
    });
    
    if (percentReserve1) {
        updatePercentValues(0.5);
    }
    
    
    percentReserve1 = false;

});

$('.point_left_2').click(function () {
    var pos_left = $(this).position().left;
    $('.reserve_1').css({
        left: pos_left,
        transition: '1s'
    });
    
    if (!percentReserve1) {
        updatePercentValues(-0.5);
    }
    percentReserve1 = true;
});

$('.point_left_3').click(function () {
    var pos_left = $(this).position().left;
    $('.reserve_2').css({
        left: pos_left,
        transition: '1s'
    });

    if (percentReserve2) {
        updatePercentValues(0.5);
    }
    
    
    percentReserve2 = false;
});

$('.point_left_4').click(function () {
    var pos_left = $(this).position().left;
    $('.reserve_2').css({
        left: pos_left,
        transition: '1s'
    });
    if (!percentReserve2) {
        updatePercentValues(-0.5);
    }
    percentReserve2 = true;
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

$('.settings_btn').click(function () {

    dott()

        $(window).resize(function () {
            $('.box').animate({
                scrollLeft: $(window).width() + 20,
            }, 0, function () {
                //код по завершении анимации
            });
        });

    $('html, body').animate({
        scrollTop: 0
    }, 'slow' );


    var leftOffset = $(window).width()+20;
    $('.box').animate({
        scrollLeft: leftOffset
    }, 'slow' )

    ///перенести футер в слайд 4 когда кликнули на кнопку с конфигуратором
    $('.pre_footer, .footer').clone('.slide_4');

    $('.box').css('height','auto');

    var width = parseInt($('.slide_2_wrapper_item').css('width'));
    var p = $('.point_top');
    switch (taksa) {
        case 1:
            var left = 0;
            break;
        case 2:
            break;
        case 3:
            var left = (width / 3) * 2;
            break;
        case 4:
            var left = width;
    }
    p.css({
        left: left,
        transition: '.2s'
    });
    updateSliderButtons();

})


//  Шестерёнки
$('.screw_1').click(function () {
    taksa = 1;
    scrollBlockToLeft();

    var width = parseInt($('.slide_2_wrapper_item').css('width'));

    var p = $('.point_top');
    var offset = p.position().left;

    var left = 0;
    p.css({
        left: left,
        transition: '.2s'
    });

    updateSliderButtons();

    dott();
});


$('.screw_2').click(function () {
    taksa = 3;
    scrollBlockToLeft();

    var width = parseInt($('.slide_2_wrapper_item').css('width'));

    var p = $('.point_top');
    // var offset = p.position().left;

    var left = (width / 3) * 2;
    p.css({
        left: left,
        transition: '.2s'
    });

    updateSliderButtons();

    dott();
});


$('.screw_3').click(function () {
    taksa = 4;
    scrollBlockToLeft();

    var width = parseInt($('.slide_2_wrapper_item').css('width'));

    var p = $('.point_top');
    // var offset = p.position().left;

    var left = (width);
    p.css({
        left: left,
        transition: '.2s'
    });

    updateSliderButtons();

    dott();
});

////точки слева для перехода по слайдам
$('.slide_2_wrapper_point_dott:nth-child(3)').click(function () {
    var topOffset = $(window).height()*2;
    $('html, body').animate({
        scrollTop: topOffset
    }, 'slow' )
});
////точки слева для перехода по слайдам


$('.to_block_2').click(function () {
    var topOffset = $(window).height();
    $('html, body').animate({
        scrollTop: topOffset
    }, 'slow' )

    dott();
});


$('.to_block_3, .slide_2_wrapper_point_dott:nth-child(3)').click(function () {
    var topOffset = $(window).height()*2;
    $('html, body').animate({
        scrollTop: topOffset
    }, 'slow' )
});


$('.to_block_4').click(function () {
    var topOffset = $(window).height()*3;
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
    $('html, body').animate({
        scrollTop: $(window).height(),
    }, 'slow' )

});


// Итоговая сумма на первой странице
$('.container_main_item').click(function () {
    if ($(this).hasClass('orange')) {
        if ($(this).hasClass('one')) {
            $('.result_num span').text(cost_1);
        } else if ($(this).hasClass('three')) {
            $('.result_num span').text(cost_3);
        } else if ($(this).hasClass('four')) {
            $('.result_num span').text(cost_4);
        }
    }
});



//шестеренка и переход на страницу с предустановленными программами
$('.screw_1').on('click', function () {

    $('.box .box_settings .slide_2_wrapper_item .point_top').position().left == 0;

});
//шестеренка и переход на страницу с предустановленными программами

$('.container_main_item_turn_block').click(function () {
    $('.container_main_item_turn_block span').each(function(k, v) {
       $(v).text() == 'Свернуть'?$(v).text('Подробнее'):$(v).text('Свернуть'); 
    });
    
    $('.container_main_item_box').toggle(400, function(){
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

    

$('.container_main_item').click(function () {
    if (!$(this).hasClass('orange')) {
        $('.taksa_1, .taksa_2, .taksa_3, .taksa_4').removeClass('orange');
        $(this).addClass('orange');
    }

    if ($(this).hasClass('taksa_1')) {
        taksa = 1;
    } else if ($(this).hasClass('taksa_2')) {
        taksa = 2;
    } else if ($(this).hasClass('taksa_3')) {
        taksa = 3;
    } else if ($(this).hasClass('taksa_4')) {
        taksa = 4;
    }

    initDataSlide();
});



// somethings 

$('.taksa_index_conteiner_item_box_reserve_toggle').click(function () {
    $('.taksa_index_conteiner_item_box_reserve_dropdown').toggle(200);
});

$('.taksa_index_conteiner_item_box_moneyback_toggle').click(function () {
    $('.taksa_index_conteiner_item_box_moneyback_dropdown').toggle(200);
});

$('.taksa_index_conteiner_item_box_receipt_toggle').click(function () {
    $('.taksa_index_conteiner_item_box_receipt_dropdown').toggle(200);
});


$('.create_taksa_btn').click( function () {
    $('html').animate({scrollTop:0},400);
})





/////////////////переход на страницу настроек
$('.create_taksa_btn, .point_first, .point_second, .point_third, .point_fourth, .screw_1, .screw_2, .screw_3, .point_left_1, .point_left_2, .point_left_3, .point_left_4').click(function () {
    initDataSlide();
});

function getVal(valName, numVal) {
    return eval(valName + numVal);
}





/////////////////переход на страницу настроек

$('.cancel_btn').click(function () {

    $('.slide_2_wrapper_point').css({
        'display':'none',
        'position':'fixed',
        'top':'40%',
        'left':'5%'
    });

    $('.point_left_1').click();
    $('.point_left_3').click();
    $('.box').animate({
        scrollLeft: 0,
        height: '1050px'
    }, 400, function () {
        $(window).resize(function () {

        })
    });

    $('body,html').animate({
        scrollTop: 0
    }, 400, function () {
        $(window).resize(function () {

        })
    });

    $(window).resize(function () {
        $('.box').animate({
            scrollLeft: 0,
        }, 0, function () {
            //код по завершении анимации
        });
    });

    initBaseVars();
    
    $('.green_btn').click(); // ?? 

    if ($('.container_main_item').hasClass('orange')) {
        $('.taksa_1, .taksa_2, .taksa_3, .taksa_4').removeClass('orange');
        $('.taksa_3').addClass('orange');
    }

    if ($('.banner_main_buttons button').hasClass('active_btn')) {
        $('.green_btn,.orange_btn,.purple_btn').removeClass('active_btn');
    }

    $('.green_btn').addClass('active_btn');

    // Уходим на главную страницу
    settingPage = false;
    percentReserve1 = false;
    percentReserve2 = false;
    return;
});

// Constants
var DEFAULT_TAKSA = 3;

var GREEN = 1;
var ORANGE = 2;
var PURPLE = 3;



var basePriceArray = [];
//такса 1-4
var cost_1, month_1, limit_1, green_percent_1, orange_percent_1, purple_percent_1;
var cost_2, month_2, limit_2, green_percent_2, orange_percent_2, purple_percent_2;
var cost_3, month_3, limit_3, green_percent_3, orange_percent_3, purple_percent_3;
var cost_4, month_4, limit_4, green_percent_4, orange_percent_4, purple_percent_4;

//доп поля
var counterArray = [];

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


// Активация/деактивация конфигуратора
///////////////////////////
// $('.slide_2_wrapper_buttons_btn_3').click( function () {
//     $('<div class="gray"></div>').appendTo('.slide_2_wrapper');
//     $('.slide_2_wrapper_item').css('filter', 'grayscale(100%)');
// });
// $('.slide_2_wrapper_buttons_btn_1').click( function () {
//     $('.gray').remove();
//     $('.slide_2_wrapper_item').css('filter', 'none')
// });
//////////////////////////////

/* functions */

// Изменение процентов по всем Таксам и Цветам на +/- значение ValueChange
function updatePercentValues(valueChange) {
    var percent;

    for (var iColor = 1 ; iColor <= 3 ; iColor ++) {
        for (var iTaksa = 1 ; iTaksa <= 4; iTaksa ++) {

            percent = eval(intColorArray[iColor] + '_percent_' + iTaksa);
            percent = percent + valueChange;
            strings = intColorArray[iColor] + '_percent_' + iTaksa;
            eval(strings +' = percent');
            
        }
    }
    recalculateCounter();
}

function getPercent (colorPercent) {
    return eval(intColorArray[colorPercent] + '_percent_' + taksa);
}

// Обновление Баннера на Главной странице
function refreshBannerSlide() {
    var bms = $('.banner_main_slider');
    bms.find('.base_price_' + color + ' span').text(basePriceArray[color]);
    bms.find('.banner_main_slider_' + color + '_content_percent span').text(getVal(intColorArray[color]+'_percent_', taksa));
    bms.find('.banner_main_slider_' + color + '_content_price span').text(Math.floor(basePriceArray[color] * ((100 - getVal(intColorArray[color]+'_percent_', taksa)) / 100)));
}

// Обновление Кнопок на Слайдере Settings
function updateSliderButtons() {
    taksaStep = taksa;
    month = $('.box .box_settings .slide_2_wrapper_item_button .value_month');
    price = $('.box .box_settings .slide_2_wrapper_item_button .value_price');
    summ = $('.box .box_settings .slide_2_wrapper_item_button .value_summ');
    month.text(eval('month_' + taksa));
    price.text(eval('cost_' + taksa) + ' руб.');
    summ.text(eval('limit_' + taksa) +  ' руб.');
}



// Инициация базовых переменных
function initBaseVars() {

    taksa = DEFAULT_TAKSA; // 6 метров
    color = 1; // зеленый

    
    basePriceArray[1] = parseFloat($('.store').find('.store_price_1').text());
    basePriceArray[2] = parseFloat($('.store').find('.store_price_2').text());
    basePriceArray[3] = parseFloat($('.store').find('.store_price_3').text());
    basePriceArray[4] = parseFloat($('.store').find('.store_price_4').text());

//такса 1
    cost_1 = parseInt($('.one').find('.col_cost span').text());
    month_1 = $('.one').find('.col_month').text();
    limit_1 = parseInt($('.one').find('.col_limit span').text());
    green_percent_1 = parseFloat($('.one').find('.percent_col_green span').text().replace(',', '.'));
    orange_percent_1 = parseFloat($('.one').find('.percent_col_orange span').text().replace(',', '.'));
    purple_percent_1 = parseFloat($('.one').find('.percent_col_purple span').text().replace(',', '.'));

//такса 2
    cost_2 = parseInt($('.two').find('.col_cost span').text());
    month_2 = $('.two').find('.col_month').text();
    limit_2 = parseInt($('.two').find('.col_limit span').text());
    green_percent_2 = parseFloat($('.two').find('.percent_col_green span').text().replace(',', '.'));
    orange_percent_2 = parseFloat($('.two').find('.percent_col_orange span').text().replace(',', '.'));
    purple_percent_2 = parseFloat($('.two').find('.percent_col_purple span').text().replace(',', '.'));

//такса 3
    cost_3 = parseInt($('.three').find('.col_cost span').text());
    month_3 = $('.three').find('.col_month').text();
    limit_3 = parseInt($('.three').find('.col_limit span').text());
    green_percent_3 = parseFloat($('.three').find('.percent_col_green span').text().replace(',', '.'));
    orange_percent_3 = parseFloat($('.three').find('.percent_col_orange span').text().replace(',', '.'));
    purple_percent_3 = parseFloat($('.three').find('.percent_col_purple span').text().replace(',', '.'));

//такса 4
    cost_4 = parseInt($('.four').find('.col_cost span').text());
    month_4 = $('.four').find('.col_month').text();
    limit_4 = parseInt($('.four').find('.col_limit span').text());
    green_percent_4 = parseFloat($('.four').find('.percent_col_green span').text().replace(',', '.'));
    orange_percent_4 = parseFloat($('.four').find('.percent_col_orange span').text().replace(',', '.'));
    purple_percent_4 = parseFloat($('.four').find('.percent_col_purple span').text().replace(',', '.'));

    recalculateCounter();    

    initDataSlide();

}

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

function initDataSlide () {
    // Обновление Баннера на Главной странице
    /*refreshBannerSlide();*/
    // Обновление % по цветам 
    updateSpansAndPercents();
    // Обновление Кнопок на Слайдере Settings
    updateSliderButtons();
}

function scrollBlockToLeft() {

    var topOffset = $(window).height();
    $('html, body').animate({
        scrollTop: topOffset
    }, 'slow' )

    var leftOffset = $(window).width()+20;
    $('.box').animate({
        scrollLeft: leftOffset
    }, 'slow' )

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

        var posOffset = $(window).scrollTop(),
            offset = $(window).height();

        $('.slide_2_wrapper_point_dott').removeClass('slide_2_wrapper_point_circle');

         if (posOffset < offset*1) {
             $('.slide_2_wrapper_point_dott:nth-child(1)').addClass('slide_2_wrapper_point_circle');
        } else if (posOffset < offset*2) {
             $('.slide_2_wrapper_point_dott:nth-child(2)').addClass('slide_2_wrapper_point_circle');
        } else if (posOffset < offset*3) {
             $('.slide_2_wrapper_point_dott:nth-child(3)').addClass('slide_2_wrapper_point_circle');
        } else if (posOffset < offset*4) {
             $('.slide_2_wrapper_point_dott:nth-child(4)').addClass('slide_2_wrapper_point_circle');
        }
    })

//переходы

var winH = $(window).height();

    $('.slide_2_wrapper_point_dott:nth-child(1)').click( function(){
        $('html, body').animate({
            scrollTop: 0
        }, 'slow' )
    });

    $('.slide_2_wrapper_point_dott:nth-child(2)').click( function(){
        $('html, body').animate({
            scrollTop: winH
        }, 'slow' )
    });

    $('.slide_2_wrapper_point_dott:nth-child(3)').click( function(){
        $('html, body').animate({
            scrollTop: winH*2
        }, 'slow' )
    });

    $('.slide_2_wrapper_point_dott:nth-child(4)').click( function(){
        $('html, body').animate({
            scrollTop: winH*3
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

$('.box').css('height', $('.box_greeting').height());
        }, 100)
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

 var domen = "";

 return{
 }

}])
