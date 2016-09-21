// Выдвигание панельки больше инфорамции
$( ".container_bottom_more" ).click(function() {
    $( ".activation_more_product_bottom" ).css("display", "none");
    $( ".activation_more_product" ).show(400);
    $( ".exit_more_product" ).animate({opacity: 1}, 1500);
    $( "div.more_plus" ).animate({opacity: 0}, 800);
    $( "a.more_plus" ).animate({opacity: 0}, 800);
});
$( ".more_plus" ).click(function() {
    $( ".activation_more_product_bottom" ).css("display", "none");
    $( ".activation_more_product" ).show(400);
    $( ".exit_more_product" ).animate({opacity: 1}, 1500);
    $( "div.more_plus" ).animate({opacity: 0}, 800);
    $( "a.more_plus" ).animate({opacity: 0}, 800);
});
//Скрывание по крестику блока больше информации
$( ".exit_more_product" ).click(function() {
    $( ".activation_more_product_bottom" ).show(400);
    $( ".activation_more_product" ).hide(400);
    $( ".exit_more_product" ).css("opacity","0");
    $( "div.more_plus" ).animate({opacity: 1}, 800);
    $( "a.more_plus" ).animate({opacity: 1}, 800);
});
//Открывание блока доп информации у продуктов.
$( "#product_1>.product_prew" ).click(function() {
    $( "div.more_plus" ).css("opacity","0");
    $( "#product_2" ).css("display", "none");
    $( "#product_3" ).css("display", "none");
    $( "#product_1" ).css("display", "none");
    $( ".container_add_arrow" ).css("display", "none");
    $( "#product_1" ).addClass("KSOS");
    $( "#product_1" ).show(400);
    $( "#exit_product_1" ).animate({opacity: 1}, 1500);

});
$( "#product_2>.product_prew" ).click(function() {
    $( "div.more_plus" ).css("opacity","0");
    $( "#product_1" ).css("display", "none");
    $( "#product_3" ).css("display", "none");
    $( "#product_2" ).css("display", "none");
    $( ".container_add_arrow" ).css("display", "none");
    $( "#product_2" ).addClass("KSOS");
    $( "#product_2" ).show(400);
    $( "#exit_product_2" ).animate({opacity: 1}, 1500);
});
$( "#product_3>.product_prew" ).click(function() {
    $( "div.more_plus" ).css("opacity","0");
    $( "#product_2" ).css("display", "none");
    $( "#product_1" ).css("display", "none");
    $( "#product_3" ).css("display", "none");
    $( ".container_add_arrow" ).css("display", "none");
    $( "#product_3" ).addClass("KSOS");
    $( "#product_3" ).show(400);
    $( "#exit_product_3" ).animate({opacity: 1}, 1500);
});
//Скрытие блока доп информации у продуктов.
$( "#exit_product_1" ).click(function() {
    $( "#product_1" ).show(400);
    $( "#product_2" ).show(400);
    $( "#product_3" ).show(400);
    $( ".container_add_arrow" ).css("display", "block");
    $( "#product_1" ).removeClass("KSOS");
    $("div.more_plus").animate({opacity: 1}, 1000);

});
$( "#exit_product_2" ).click(function() {
    $( "div.more_plus" ).animate({opacity: 1}, 1000);
    $( "#product_2" ).show(400);
    $( "#product_1" ).show(400);
    $( "#product_3" ).show(400);
    $( ".container_add_arrow" ).css("display", "block");
    $( "#product_2" ).removeClass("KSOS");
});
$( "#exit_product_3" ).click(function() {
    $( "div.more_plus" ).animate({opacity: 1}, 1000);
    $( "#product_3" ).show(400);
    $( "#product_2" ).show(400);
    $( "#product_1" ).show(400);
    $( ".container_add_arrow" ).css("display", "block");
    $( "#product_3" ).removeClass("KSOS");
});


/*pop-up*/
$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы
    PopUpHide();
    PopUpHide1();
    PopUpHide2();
    PopUpHide3();
    PopUpHide4();
    PopUpHide5();
    PopUpHide6();
    PopUpHide7();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}
function PopUpShow1(){
    $("#popup2").show();
}
function PopUpShow2(){
    $("#popup3").show();
}
function PopUpShow3(){
    $("#popup4").show();
}
function PopUpShow4(){
    $("#popup5").show();
}
function PopUpShow5(){
    $("#popup6").show();
}
function PopUpShow6(){
    $("#popup7").show();
}
function PopUpShow7(){
    $("#popup8").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}
function PopUpHide1(){
    $("#popup2").hide();
}
function PopUpHide2(){
    $("#popup3").hide();
}
function PopUpHide3(){
    $("#popup4").hide();
}
function PopUpHide4(){
    $("#popup5").hide();
}
function PopUpHide5(){
    $("#popup6").hide();
}
function PopUpHide6(){
    $("#popup7").hide();
}
function PopUpHide7(){
    $("#popup8").hide();
}
/*Фигня для оптимального продукта*/
var PK = $(".PK"),
     SERVER = $(".SERVER"),
     P1 = $("#product_1"),
     P2 = $("#product_2"),
     P3 = $("#product_3"),
     ARROW = $(".arrow_blue"),
     Pm1 = $("#spoiler_01"),
     Pm2 = $("#spoiler_02"),
     Pm3 = $("#spoiler_03"),
     Pm1s = $("#spoiler_01s"),
     Pm2s = $("#spoiler_02s"),
     Pm3s = $("#spoiler_03s"),
     PKup = $( ".up-PK" ),
     PKdown = $( ".down-PK" ),
     SERup = $( ".up-SERVER" ),
     SERdown = $( ".down-SERVER" );

PKup.click(function() {
    var number = PK.val();
    number++;
    PK.val(number).trigger('change');
});
PKdown.click(function() {
    var number = PK.val();
    if(number > 5) {
        number--;
        PK.val(number).trigger('change');
    }
});
SERup.click(function() {
    var number = SERVER.val();
    number++;
    SERVER.val(number).trigger('change');
});
SERdown.click(function() {
    var number = SERVER.val();
    if(number > 0) {
        number--;
        SERVER.val(number).trigger('change');
    }
});

function setArrowState(state) {
    var new_state;
    if(((PK.val() >= 5) &&(PK.val() <= 49)) && (SERVER.val() == 0)) {
        new_state = 2;
    }else if(((PK.val() >= 15) &&(PK.val() <= 24)) && (SERVER.val() == 2)){
        new_state = 1;
    } else if(((PK.val() >= 5) &&(PK.val() <= 14)) && (SERVER.val() == 1)){
        new_state = 1;
    }else if(SERVER.val() >= 3){
        new_state = 3;
    }else{
        new_state = 3;
    }
    if (state != new_state) {
        ARROW.stop(true,true);
    }
    state = new_state;
    switch(state) {
        case 1:
            P2.removeClass('product_active').addClass('product');
            P3.removeClass('product_active').addClass('product');
            ARROW.animate({right: 81 + '%'}, 500, function () {
                P1.addClass('product_active').removeClass('product');
            });

            // для мобильной версии
            Pm1.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm2s.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm3s.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm1s.css("display", "block").css("background", "rgb(212, 231, 248)");
            Pm2.css("display", "block").css("background", "rgba(212, 231, 248, 0)");
            Pm3.css("display", "block").css("background", "rgba(212, 231, 248, 0)");

            break;
        case 2:
            P1.removeClass('product_active').addClass('product');
            P3.removeClass('product_active').addClass('product');
            ARROW.animate({right: 48 + '%'}, 500, function () {
                P2.addClass('product_active').removeClass('product');
            });

            // для мобильной версии
            Pm1s.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm2.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm3s.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm1.css("display", "block").css("background", "rgba(212, 231, 248, 0)");
            Pm2s.css("display", "block").css("background", "rgb(212, 231, 248)");
            Pm3.css("display", "block").css("background", "rgba(212, 231, 248, 0)");
            
            break;
        case 3:
            P1.removeClass('product_active').addClass('product');
            P2.removeClass('product_active').addClass('product');
            ARROW.animate({right: 15 + '%'}, 500, function () {
                P3.addClass('product_active').removeClass('product');
            });

            // для мобильной версии
            Pm1s.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm2s.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm3.css("display", "none").css("background", "rgba(212, 231, 248, 0)");
            Pm1.css("display", "block").css("background", "rgba(212, 231, 248, 0)");
            Pm2.css("display", "block").css("background", "rgba(212, 231, 248, 0)");
            Pm3s.css("display", "block").css("background", "rgb(212, 231, 248)");
            
            break;
    }
    return state;
}
var state = 2;
PK.change(function(){state = setArrowState(state);});
SERVER.change(function(){ state = setArrowState(state);});

//Форма обратной связи


var frm = $('#contact_form');
frm.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                document.getElementById('contact_form').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });
    ev.preventDefault();
});

var frm1 = $('#contact_form1');
frm1.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm1.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                $('#popup8').hide();
                document.getElementById('contact_form1').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });

    ev.preventDefault();
});
var frm2 = $('#contact_form2');
frm2.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm2.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                $('#popup7').hide();
                document.getElementById('contact_form2').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });

    ev.preventDefault();
});
var frm3 = $('#contact_form3');
frm3.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm3.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                $('#popup6').hide();
                document.getElementById('contact_form3').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });

    ev.preventDefault();
});
var frm4 = $('#contact_form4');
frm4.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm4.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                $('#popup5').hide();
                document.getElementById('contact_form4').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });

    ev.preventDefault();
});
var frm5 = $('#contact_form5');
frm5.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm5.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                $('#popup4').hide();
                document.getElementById('contact_form5').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });

    ev.preventDefault();
});
var frm6 = $('#contact_form6');
frm6.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm6.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                $('#popup3').hide();
                document.getElementById('contact_form6').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });

    ev.preventDefault();
});

var frm7 = $('#contact_form7');
frm7.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm7.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                $('#popup2').hide();
                document.getElementById('contact_form7').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });

    ev.preventDefault();
});

var frm8 = $('#contact_form8');
frm8.submit(function (ev) {
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: frm8.serialize(),
        success: function (data) {
            if(parseInt(data) == 1){
                $('#popup1').hide();
                document.getElementById('contact_form8').reset();
            }else{
                console.log('Ошибка');
            }
        }
    });

    ev.preventDefault();
});

