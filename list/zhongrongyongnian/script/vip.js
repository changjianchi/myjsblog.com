$(function () {
    var $container = $('.container');
    (function ($) {
        var height = $(window).height() - $('.header').height() - 10;
        var $subinfo = $container.find('.subinfo');
        var width = $subinfo.width();

        $container.css('height', height + 'px');
        $('.vleft_wrap').css('height', height + 'px');
        $subinfo.css('height', height-$('.subtitle').height() + 'px');
        $subinfo.find('.iframe').css({
            'width': width + 'px',
            'height': height - $('.subtitle').height() + 'px'
        });

        var $vlogin = $('.vlogin');
        var flag = false;

        $vlogin.on('click', function (event) {
            if (flag) {
                $(this).find('.vlogtitle').removeClass('vloginactive');
                $(this).find('.vloginfo').stop(true).slideUp(100);
                flag = false;
            }
            else {
                $(this).find('.vlogtitle').addClass('vloginactive');
                $(this).find('.vloginfo').stop(true).slideDown(200);
                flag = true;
            }
        });
    })(jQuery);

    var $iframes = $('.iframes');
    if ($iframes.length < 1) {
        (function ($) {
            var $nav = $('.nav');
            var $vnav = $container.find('.vnav');
            var $vlist = $vnav.find('.vlist');
            var $subnav = $container.find('.subnav');
            var $subbtn = $container.find('.subbtn');
            var $more = $container.find('.submore');
            var $subinfo = $container.find('.subinfo');
            var $iframe = $subinfo.find('.iframe');

            if ($iframe.length > 0) {
                aNum = 2;
            }
            else {
                aNum = 1;
            }

            var flag = false;
            var num = 0;
            var text = '';
            var localArr = [];
            var active = 'active';

            $.each($vlist, function (index, vlist) {
                var flag = false;
                $(vlist).on('click', '.vtitle', function () {
                    if (flag) {
                        $(this).removeClass('active');
                        $(this).next('.vinfo').stop(true).slideUp(100);
                        flag = false;
                    }
                    else {
                        $(this).addClass('active');
                        $(this).next('.vinfo').stop(true).slideDown(200);
                        flag = true;
                    }

                    return false;
                });
            });

            var resetIframe = function () {
                var height = $(window).height() - $('.header').height() - 10;
                var width = $subinfo.width();
                
                $iframe.css({
                    width: width + 'px',
                    height: height - $('.subtitle').height() + 'px'
                });
            }

            $nav.on('click', 'a', function () {
                $(this).addClass('active').siblings().removeClass('active');
                $vnav.find('.vnav_con').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
                return false;
            });

            $(window).on('resize', function () {
                resetIframe();
            });

            $subnav.on('click', 'a', function () {
                var $this = $(this);
                $this.addClass('active').siblings().removeClass('active');

                $.each($vnav.find('.vbtn'), function (key, val) {
                    if ($(val).attr('data-index') == $this.attr('data-index')) {
                        $(val).attr('data-flag', '1').addClass('hover');
                    }
                    else {
                        $(val).attr('data-flag', '0').removeClass('hover');
                    }
                });

                $.each($iframe, function (ikey, ival) {
                    if ($(ival).attr('data-index') == $this.attr('data-index')) {
                        $iframe.hide(0);
                        $(ival).show(0);
                    }
                })
                return false;
            });

            $.each($vnav.find('.vbtn'), function (key, val) {
                var daIndex = $(this).parents('.vnav_con').index() * 1000 + $(this).parents('.vlist').index() * 100 + $(this).index();
                $(val).attr('data-index', daIndex);
            })

            var addBtn = function (text, index) {
                var aBtn = [
                    '<a class="border_bottom active" data-index="' + index + '" href="javascript:;" title="' + text + '">',
                        '<em></em>',
                        '<span>' + text + '</span>',
                        '<i></i>',
                        '<div class="bg"></div>',
                        '<div class="bor border_right"></div>',
                    '</a>',
                ].join('');

                return aBtn;
            }

            var addIframe = function (href, dIndex) {
                var ifra = '<iframe src="' + href + '" class="iframe" data-index="' + dIndex + '" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
                return ifra;
            }

            $vnav.on('click', '.vbtn', function () {
                var $this = $(this);
                if (!$this.hasClass('hover')) {
                    $('.vbtn').removeClass('hover');
                    $this.addClass('hover');
                    
                    var flag = $this.attr('data-flag');

                    if (flag == 1) {
                        $.each($subnav.find('a'), function (key, val) {
                            if ($(val).attr('data-index') == $this.attr('data-index')) {
                                $subnav.find('a').removeClass('active');
                                $(val).addClass('active');
                                $iframe.hide(0);
                                $.each($iframe, function (ikey, ival) {
                                    if ($(ival).attr('data-index') == $(val).attr('data-index')) {
                                        $(ival).show(0);
                                    }
                                })
                            }
                        });
                    }
                    else {
                        var info = $.text($this);
                        var index = $this.parents('.vnav_con').index() * 1000 + $this.parents('.vlist').index() * 100 + $this.index();
                        var href = $this.attr('href');
                        
                        if ($subnav.find('a').length >= 8) {
                            $('.subbtn').css('display', 'block');
                        }

                        var conTitle = addBtn(info, index);

                        $this.attr('data-flag', '1');
                        $subnav.find('a').removeClass('active');
                        $subnav.append(conTitle);

                        var $ifra = addIframe(href, index);
                        $iframe.hide(0);
                        $subinfo.append($ifra);

                        $iframe = $subinfo.find('iframe');
                        resetIframe();
                    }
                }

                return false;
            });

            $subnav.on('mouseenter mouseleave click', 'a i', function (event) {
                if (event.type === 'mouseenter') {
                    $(this).addClass('hover');
                }
                else if (event.type === 'mouseleave') {
                    $(this).removeClass('hover');
                }
                else {
                    var $this = $(this);
                    var dataIndex = $this.parent().attr('data-index');
                    var iIndex = $this.parent().index();
                    $this.parent().remove();

                    $.each($iframe, function (key, val) {
                        if ($(val).attr('data-index') == dataIndex) {
                            $(val).remove();

                            if ($this.parent().hasClass('active')) {
                                if (iIndex == '0') {
                                    if ($iframe.length > 2) {
                                        num = 0;
                                        $iframe.eq(key + 1).show(0);
                                    }
                                    else {
                                        num = key - aNum;
                                        $iframe.eq(key - 1).show(0);
                                    }
                                }
                                else {
                                    num = key - aNum;
                                    $iframe.eq(key - 1).show(0);
                                }
                                $subnav.find('a').eq(num).addClass('active');
                                text = $subnav.find('a').eq(num).attr('data-index');

                            }
                        }
                    })

                    $.each($vnav.find('.vbtn'), function (key, val) {
                        if ($(val).attr('data-index') == $this.parent().attr('data-index')) {
                            $(val).attr('data-flag', '0').removeClass('hover');
                        }
                        else if ($(val).attr('data-index') == text) {
                            $(val).attr('data-flag', '1').addClass('hover');
                        }
                    })
                    $iframe = $subinfo.find('iframe');

                    up($subbtn);
                    return false;
                }
            });

            $subbtn.on('click', function () {
                if (flag) {
                    up($(this));
                }
                else {
                    down($(this));
                }
                return false;
            });

            var up = function (obj) {
                obj.removeClass('subbtnactive');
                $more.stop(true).slideUp(80);
                flag = false;
            }

            var down = function (obj) {
                obj.addClass('subbtnactive');
                $more.stop(true).slideDown(150);
                flag = true;
            }
        })(jQuery);
    }
    else {
        var hei = $(window).height();
        $iframes.css('height', hei + 'px');

        (function ($) {
            var $vipbox = $('.vipbox');

            $.each($vipbox, function (index, obj) {
                var $this = $(obj);
                var $viptit = $(obj).find('.viptit');
                var $vipin = $(obj).find('.vipin');
                var flag = '';

                $(obj).on('mouseenter mouseleave', function (event) {
                    if (event.type === 'mouseenter') {
                        $(this).addClass('vipboxactive');
                    }
                    else {
                        $(this).removeClass('vipboxactive');
                    }
                });

                if ($vipin.length > 0) {
                    $(obj).on('click', '.viptit', function () {
                        flag = Boolean($(obj).attr('data-flag'));

                        $.each($vipbox, function (key, val) {
                            var flag = Boolean($(val).attr('data-flag'));
                            if (index != key && $(val).find('.vipin').is(':visible')) {
                                up($(this), $(this).find('.vipin'));
                            }
                        });

                        if (flag) {
                            up();
                        }
                        else {
                            down();
                        }
                    });

                    $(obj).on('click', '.vipin a', function () {
                        $viptit.html($(this).text());
                        $(this).addClass('hover').siblings().removeClass('hover');
                        up();

                        return false;
                    });
                }

                var up = function (obj, vipin) {
                    obj = obj || $this;
                    vipin = vipin || $vipin;

                    obj.removeClass('vipboxactive2');
                    vipin.stop(true).slideUp(100);
                    $(obj).attr('data-flag', '');
                }

                var down = function (obj, vipin) {
                    obj = obj || $this;
                    vipin = vipin || $vipin;

                    obj.addClass('vipboxactive2');
                    vipin.css('width', $this.width());
                    vipin.stop(true).slideDown(200);
                    $(obj).attr('data-flag', 'true');
                }
            });
        })(jQuery);

        (function ($) {
            var $chart = $('.chart');

            $.each($chart.find('.chart_wrap'), function (key, val) {
                if (key > 1) {
                    $(val).find('.chart_box').addClass('chart_mar');
                }
                if (key % 2 == 0) {
                    $(val).addClass('chart_even_padd');
                    $(val).find('.chart_box').addClass('chart_even');
                }
                else {
                    $(val).addClass('chart_odd_padd');
                    $(val).find('.chart_box').addClass('chart_odd');
                }
            });
        })(jQuery);

        (function ($) {
            $(".tables").mCustomScrollbar({
                axis:"x",
                theme:"light-3",
                advanced:{autoExpandHorizontalScroll:true}
            });

            var $page = $('.page');

            $page.on('mouseenter mouseleave click', 'span:not(".ellip")', function (event) {
                if (event.type === 'mouseenter') {
                    $(this).addClass('hover');
                }
                else if (event.type === 'mouseleave') {
                    $(this).removeClass('hover');
                }
                else {
                    $(this).addClass('active').siblings().removeClass('active');
                    return false;
                }
            });
        })(jQuery);

        var $table = $('.table');

        $.each($table, function (index, table) {
            var $tr = $(table).find('tr');
            $tr.last().find('td').removeClass('border_bottom');

            $.each($tr, function (trindx, tr) {
                var $td = $(tr).find('td');
                $td.last().find('span').removeClass('border_right');
            });
        });
    }
});
