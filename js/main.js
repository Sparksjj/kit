

$(document).ready(function () {


    $('.question a').tooltip({
        animation: true,
        delay: {"show": 100, "hide": 100}
    });

    $('a').on('click', function () {
        return false;
    });

    initBaseVars();
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
});


