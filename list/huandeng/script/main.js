(function ($) {
    $(function () {
        var $wrap = $('.scroll');
        $.each($wrap, function (key, val) {
            var $container = $(val);
            var $ul = $container.find('.info');
            var $li = $ul.find('li');
            var $btn = $container.find('.btn');
            var $prev = $container.find('.prev');
            var $next = $container.find('.next');
            var $btnaWid = $next.width();

            var num = 0;
            var speed = 3000;
            var iTimer = null;

            var $pageBtn = '';
            $.each($li, function(i){
                $pageBtn += '<span' + (i==0 ? ' class="active"' : '') + '>' + (i+1) + '</span>';
            });
            $btn.append($pageBtn);

            $container.on('click', '.prev', function () {
                addNum('prev');
                loop(num);
            });

            $container.on('click', '.next', function () {
                addNum('next');
                loop(num);
            });

            $btn.on('click', 'span', function () {
                num = $(this).index();
                loop(num);
            });

            $container.on('mouseenter mouseleave', function (event) {
                if (event.type == 'mouseenter') {
                    clearInterval(iTimer);
                    btna('', 1, 100);
                }
                else if (event.type == 'mouseleave') {
                    iTimer = setInterval(autoloop, speed);
                    btna('-', 0, 50);
                }
                return false;
            });

            var btna = function(flag, opacity, speed) {
                if (!$prev.is(':animated') && !$next.is(':animated')) {
                    $prev.stop(true).animate({
                        opacity: opacity,
                        left: flag + $btnaWid + 'px'
                    }, speed);
                    $next.stop(true).animate({
                        opacity: opacity,
                        right: flag + $btnaWid + 'px'
                    }, speed);
                }
            }

            var autoloop = function () {
                addNum('next');
                loop(num);
            }

            iTimer = setInterval(autoloop, speed);

            var loop = function (num) {
                if (!$li.is(':animated')) {
                    $li.eq(num).animate({
                        opacity: 1,
                        zIndex: 1
                    }, 500).siblings().animate({
                        opacity: 0,
                        zIndex: 0
                    }, 500);
                    $btn.find('span').eq(num).addClass('active').siblings().removeClass('active');
                }
            }

            var addNum = function (flag) {
                if (flag === 'next') {
                    num++;
                }
                else if (flag === 'prev') {
                    if (num === 0) {
                        num = $li.length;
                    }
                    num--;
                }
                num = parseInt(num % $li.length,10);
            }
        });
    });
})(jQuery);
