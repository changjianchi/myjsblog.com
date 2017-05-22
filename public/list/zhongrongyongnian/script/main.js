$(function () {
    var $container = $('.container');

    (function ($) {
        var setHeight = function () {
            var width = $(window).width();
            var height = $(window).height();
            var bodyHeight = $container.height();

            if (width < 640) {
                $('html').css('width', '640px');
                $('.header').css('width', '640px');
                $('.footer').css('width', '640px');
            }
            else {
                $('html').css('width', '100%');
                $('.header').css('width', '100%');
                $('.footer').css('width', '100%');
            }

            if (bodyHeight > (height - 200)) {
                $('body').addClass('body_auto');
            }
        }
        setHeight();
        $(window).on('resize', function () {
            setHeight();
        });
    })(jQuery);

    (function ($) {
        var $label = $('.login .form label.inp');

        $label.find('input').on('focus blur', function (event) {
            if (event.type === 'focus') {
                $(this).addClass('focus');
            }
            else if (event.type === 'blur') {
                $(this).removeClass('focus');
            }
        });
    })(jQuery);

    (function ($) {
        var $newsdl = $('.news_dl');
        var $dt = $newsdl.find('dt');
        var iTimer = null;
        var news_num = 0;
        var news_speed = 3000;

        var newsImg = function () {
            news_num++;
            news_num = news_num % $dt.find('a').length;
            $dt.find('a').eq(news_num).addClass('active').siblings().removeClass('active');
        }
        iTimer = setInterval(newsImg, news_speed);
        $newsdl.on('mouseenter', 'dd', function (event) {
            news_num = $(this).index() - 2;
            clearInterval(iTimer);
            newsImg();
            $(this).addClass('active').siblings().removeClass('active');
            return false;
        });
        $newsdl.on('mouseleave', function () {
            iTimer = setInterval(newsImg, news_speed);
        })
    })(jQuery);
    
    (function ($) {
        $('.form_input').on('focus blur', function (event) {
            if (event.type == 'focus') {
                $(this).addClass('focusInput');
            }
            else {
                $(this).removeClass('focusInput');
            }
        });
    })(jQuery);

    (function ($) {
        var $loginBtn = $container.find('.loginBtn');
        var $login_wrap = $('.login_wrap');
        var $close = $login_wrap.find('.close');
        var $bg = $login_wrap.find('.login_bg');
        var flag = false;

        $loginBtn.on('click', function () {
            if (flag) {
                hide();
            }
            else {
                show();
                flag = true;
            }
            return false;
        });

        $close.on('click', function () {
            hide();
        });

        $bg.on('click', function () {
            hide();
        });

        var show = function () {
            $login_wrap.show(0);
            flag = false;
        }

        var hide = function () {
            $login_wrap.hide(0);
            flag = false;
        }
    })(jQuery);
});
