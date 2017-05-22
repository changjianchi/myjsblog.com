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
        if (!$login_wrap.is(':hidden')) {
            marginTop();
        }

        var setSelect = function () {
            var $select = $('.select_wrap:visible');
            $.each($select, function (key, val) {
                var $this = $(val).find('.select');
                var flag = false;
                var $valueHeight = $(val).find('.value').height();
                var $height = $(val).find('.option').height();

                $(val).css('zIndex', $select.length - key);

                $this.find('.value').on('click', function () {
                    if (flag) {
                        $this.animate({
                            height: $valueHeight + 'px'
                        }, 50);
                        flag = false;
                    }
                    else {
                        $this.animate({
                            height: ($height + $valueHeight) + 'px'
                        }, 100);
                        flag = true;

                        setTimeout(function () {
                            $(document).one('click', function () {
                                $this.animate({
                                    height: $valueHeight + 'px'
                                }, 50);
                                flag = false;
                            });
                        });
                    }
                });

                $this.find('.option p').on('click mouseenter mouseleave', function (event) {
                    if (event.type === 'click') {
                        $this.find('.value').html($(this).text());
                        $(this).addClass('active').siblings().removeClass('active');
                        $this.animate({
                            height: $valueHeight + 'px'
                        }, 50);
                        flag = false;
                    }
                    else if (event.type === 'mouseenter') {
                        $(this).addClass('hover');
                    }
                    else {
                        $(this).removeClass('hover');
                    }
                    
                });

            });
        };

        $loginBtn.on('click', function () {
            if (flag) {
                hide();
            }
            else {
                show();
                flag = true;
                setSelect();
                marginTop();
            }
            return false;
        });

        function marginTop() {
            var $windowHeight = $(window).height();
            var $height = $login_wrap.find('.login_info').height();
            if ($height > $windowHeight) {
                $height = $windowHeight;
            }
            $login_wrap.find('.login_info').css({
                'height': $height + 'px',
                'marginTop': '-' + $height/2 + 'px'
            });
        }

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

        $('.left .list').on('click', '.list_title', function () {
            var $ul = $(this).closest('dt').find('ul.list_ul');
            if ($ul.length) {
                show();
                // 可以在这里判断登录是否成功，如果成功继续往下执行
                flag = true;
                marginTop();
                if ($(this).closest('dt').hasClass('setdown')) {
                    $(this).closest('dt').removeClass('setdown');
                }
                else {
                    $(this).closest('dt').addClass('setdown');
                }
                return false;
            }
        });

        $('.file input[type=file]').on('change', function () {
            $(this).closest('.file').find('.file_text').val($(this).val());
        });
        $('.file').hover(function () {
            $(this).find('.file_btn').addClass('file_btn_active');
        },
        function () {
            $(this).find('.file_btn').removeClass('file_btn_active');
        });
    })(jQuery);

    (function($) {
        var $headHeight = $('.yl_head').height();
        var height = $(window).height();
        console.log(height, 's');
        $('.yl_content').css('height', height - $headHeight + 'px');
        $('.iframe').css('height', height - $headHeight + 'px');
    })(jQuery);
});
