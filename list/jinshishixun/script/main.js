$(function () {
    var $nav = $('.nav');

    $nav.on('mouseover mouseout', 'a', function (event) {
        var $this = $(this);
        if (event.type === 'mouseover') {
            $this.addClass('active').siblings().removeClass('active');
        }
        else if (event.type === 'mouseout') {
            $this.removeClass('active');
        }
    });

    /**
     * [$appcon app图片居中显示]
     * @type {[type]}
     */
    var $appcon = $('.appcontent');
    var $app = $appcon.find('.app');
    $app.css({
        width: $appcon.width() * 0.8 + 'px'
    })
    var $wid = $appcon.width() * 0.8;
    var $hei = $appcon.width() * 0.8 * 0.45916115;
    $app.css({
        position: 'absolute',
        left: '50%',
        top: '50%',
        margin:'-' + $hei / 2 + 'px 0 0 -' + $wid / 2 + 'px'
    });

    var defaultLeft = 0;
    $("#subShutHover").prevAll().each(function () {
        defaultLeft += $(this).innerWidth();
    });

    //副标题
    defaultLeft -= $(".indicator").innerWidth();
    $(".indicator").css("left", defaultLeft);
    $(".indicator").width($("#subShutHover").width());


    var hoverTimer;
    $(".submenu").hover(function () {
        var $this = $(this);
        hoverTimer = setTimeout(function () {
            var width = 0;
            $this.prevAll().each(function () {
                width += $(this).innerWidth();
            });
            width -= $(".indicator").innerWidth();
            $(".indicator").animate({left: width, width: $this.width()});
        }, 150);
    }, function () {
        clearTimeout(hoverTimer);
    });

    $(".submenus").hover(function () {
        $(".indicator").removeClass("hide");
    }, function () {
        var width = 0;
        $("#subShutHover").prevAll().each(function () {
            width += $(this).innerWidth();
        });
        width -= $(".indicator").innerWidth();
        $(".indicator").animate({left: width, width: $("#subShutHover").width()});
    })
    //副标题 END
    

    $('.search').on('focus blur', function (event) {
        console.log(event.type);
        if (event.type === 'focus') {
            $('.news_search2').addClass('box_focus');
        }
        else if (event.type === 'blur') {
            $('.news_search2').removeClass('box_focus');
        }
    });

    if ($('.kong').length > 0) {
        var $hangqing = $('.hangqing');
        var $hq = $hangqing.find('.hq');
        var $top = 0;
        var $hei = $hangqing.height();

        $(window).on('scroll', function () {
            if ($top == 0) {
                $top = $('.kong').offset().top;
            }
            var top = $(window).scrollTop();
            var wid = $hangqing.width();
            console.log(top, $top);
            if (top > $top) {
                $hangqing.css('height', $hei + 'px');
                $hq.addClass('fixed').css('width', wid);
            }
            else {
                $hq.removeClass('fixed').css('width', 'auto');
                $hangqing.css('height', 'auto');
            }
        });
    }
});
