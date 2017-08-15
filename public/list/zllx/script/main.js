$(function () {
    var $container = $('.container');
    var $header = $container.find('.header');
    var $banner = $container.find('.banner');
    var $banImg = $banner.find('.swiper-slide').children('img');
    var $setWid = $container.find('.setWidth');

    var winHei = $(window).height();
    var widWid = $(window).width();

    $banImg.height(winHei - $header.height());

    var $theme = $('.theme ul li');
    $.each($theme, function (key, val) {
        var $this = $(val);
        $(val).hover(function () {
            $this.find('.bg').animate({
                'opacity': 0
            }, 100);
        }, function () {
            $this.find('.bg').stop(true).animate({
                'opacity': .6
            }, 100);
        });
    });

    var $theme = $('.qqdr_ban_info .qqdr_ul li');
    $.each($theme, function (key, val) {
        var $this = $(val);
        $(val).hover(function () {
            $this.find('.bg').animate({
                'opacity': 0
            }, 100);
        }, function () {
            $this.find('.bg').stop(true).animate({
                'opacity': .6
            }, 100);
        });
    });

    var $list_box = $container.find('.list_box');
    $list_box.find('input, textarea').on('focus blur input change', function (event) {
        if (event.type === 'focus') {
            $(this).parent().addClass('active');
        }
        else if (event.type === 'blur') {
            $(this).parent().removeClass('active');
        }
        else {
            if ($(this).val() === '') {
                $(this).parent().find('.bg2').show();
                $(this).parent().find('.bg3').find('em').show();
            }
            else {
                $(this).parent().find('.bg2').hide();
                $(this).parent().find('.bg3').find('em').hide();
            }
        }
    });

    $list_box.on('click', function () {
        $(this).find('input').focus();
    });

    $('.ewm').hover(function () {
        $(this).find('.ewm_info').show();
    }, function () {
        $(this).find('.ewm_info').hide();
    });
});
