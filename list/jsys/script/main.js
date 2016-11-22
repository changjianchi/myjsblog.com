$(function() {
    $('input').on('focus blur', function (event) {
        if (event.type === 'focus') {
            $(this).addClass('input_active');
        }
        else {
            $(this).removeClass('input_active');
        }
    });

    $('.pass_sub2').on('click', '.pass_sub_span', function () {
        var index = $(this).attr('data-index');
        $(this).addClass('active').siblings().removeClass('active');
        $('.pass_tab_content').eq(index).show().siblings().hide();
    });

    /**
     * [$winHeight 屏幕的高度，当body的高度小于屏幕的高度，则把屏幕的高度赋值给body]
     * @type {[number]}
     */
    var $winHeight = $(window).height();
    if ($('body').height() < $winHeight) {
        $('body').height($winHeight)
    }

    /**
     * [$select 模拟下拉框]
     * @type {[obj]}
     */
    var $select = $('.s_select_wrap');
    $.each($select, function (key, val) {
        var $this = $(val).find('.s_select');
        var flag = false;
        var $valueHeight = $(val).find('.s_value').height();
        var $height = $(val).find('.s_option').height();

        $(val).css('zIndex', $select.length - key);

        $this.find('.s_value').on('click', function () {
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

        $this.find('.s_option p').on('click mouseenter mouseleave', function (event) {
            if (event.type === 'click') {
                $this.find('.s_value').html($(this).text());
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

    /**
     * [h_tr 隔行变色]
     * @type {[obj]}
     */
    $('.h_tr:even').addClass('active');
    $('.cktable tr:even').addClass('active');
    $('.cktable_huojiang .h_tr:not(".h_tr_first")').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    /**
     * [获奖情况 - 新增一行]
     * @param  {[type]} ) {               } [description]
     * @return {[type]}   [description]
     */
    $('#h_table .add').on('click', function () {

        var addline = [
            '<tr class="h_tr c_tr_data">',
            '   <td align="center"></td>',
            '   <td align="center"><input type="text" class="input" value=""></td>',
            '   <td align="center"><input type="text" class="input" value=""></td>',
            '   <td align="center"><input type="text" class="input" value=""></td>',
            '   <td align="center">',
            '       <div class="s_select_wrap">',
            '           <div class="s_select">',
            '               <div class="s_value"></div>',
            '               <div class="s_option">',
            '                   <p class="active"></p>',
            '               </div>',
            '               <div class="s_select_bg"></div>',
            '           </div>',
            '       </div>',
            '       <div class="h_del"><img src="images/del.png" alt=""></div>',
            '   </td>',
            '</tr>'
        ].join('');
        $(this).closest('tr').before(addline);
        initIndexBg();
    });

    $('#h_table').on('click', '.h_del', function () {
        console.log('真的开始删除了。啦啦啦', this);
        $(this).closest('tr').remove();
        initIndexBg();
    });

    var initIndexBg = function () {
        $('#h_table tr.c_tr_data').each(function (index) {
            console.log(this, index);
            $(this).find('td').eq(0).text(index + 1);
        });

        $('.h_tr').removeClass('active');
        $('.h_tr:even').addClass('active');
    };

    /**
     * [项目主创人员 - 新增一行]
     * @param  {[type]} ) {               } [description]
     * @return {[type]}   [description]
     */
    $('#zhuchuang_table .add').on('click', function () {

        var index = $(this).parents('.h_tr').prev().find('td:eq(0)').html();
        var addline = [
            '<tr class="h_tr c_tr_data">',
            '   <td align="center"><input type="text" class="input" value=""></td>',
            '   <td align="center"><input type="text" class="input" value=""></td>',
            '   <td align="center"><input type="text" class="input" value=""></td>',
            '   <td align="center"><input type="text" class="input" value=""></td>',
            '   <td align="center">',
            '       <div class="s_select_wrap">',
            '           <div class="s_select">',
            '               <div class="s_value"></div>',
            '               <div class="s_option">',
            '                   <p class="active"></p>',
            '               </div>',
            '               <div class="s_select_bg"></div>',
            '           </div>',
            '       </div>',
            '       <div class="h_del"><img src="images/del.png" alt=""></div>',
            '   </td>',
            '</tr>'
        ].join('');
        $(this).closest('tr').before(addline);
        initIndexBg2();
    });

    $('#zhuchuang_table').on('click', '.h_del', function () {
        console.log('真的开始删除了。啦啦啦', this);
        $(this).closest('tr').remove();
        initIndexBg2();
    });

    var initIndexBg2 = function () {

        $('.h_tr').removeClass('active');
        $('.h_tr:even').addClass('active');
    };

    
    var $sbox = $('.s_tab_box');
    $.each($sbox, function (index, sbox) {
        var flag = false;
        $(sbox).on('click', '.s_tab_title', function () {
            if (flag) {
                $(this).next('.s_tab_info').stop(true).slideUp(100);
                flag = false;
            }
            else {
                $(this).next('.s_tab_info').stop(true).slideDown(200);
                flag = true;
            }
            return false;
        });
    });
    $sbox.on('click', '.s_tab_info a', function () {
        $.each($sbox, function (index, sbox) {
            $(sbox).find('.s_tab_info a').removeClass('active')
        })
        $(this).addClass('active');
        return false;
    });

    $('.s_click').on('click', function (event) {
        var target = $(event.target);
        if (!target.hasClass('input')) {
            $(this).closest('tr').next('.s_subinfo').show().siblings('.s_subinfo').hide();
        }
    });

    $('.cktable_huojiang').on('click', '.bianji_btn', function () {
        $(this).hide().closest('td').find('input').show();
    });

    $('.zjxz').on('click', '.zj_list', function () {
        $(this).addClass('zj_active').siblings().removeClass('zj_active');
    });

    $('#h_table').on('click', '.delete', function () {
        $(this).closest('tr').remove();
    });

    $('.fp_info_tagcon').on('click', '.tag', function () {
        var $tag = this;
        $('.tips').hide();
        $('.fp_info_taginfo').append($tag);
    });

    $('.fp_info_taginfo').on('click', '.close', function () {
        var $tag2 = $(this).closest('.tag');
        $('.fp_info_tagcon').append($tag2);
    });

    var iFlag = false;
    var $cHei = $('.ssjh_content').height();
    $('.clickSpan').on('click', function () {
        if (iFlag) {
            $(this).text('点击展开');
            $('.ssjh_content').height($cHei);
            iFlag = false;
        }
        else {
            $(this).text('点击收起');
            $('.ssjh_content').height('auto');
            iFlag = true;
        }
        
    });

    var $iframe = $('.subinfo').find('.iframe');

    var resetIframe = function () {
        var height = $(window).height() - $('.header').height() - 10;
        var width = $('.subinfo').width();
        
        $iframe.css({
            width: width + 'px',
            height: height - $('.subtitle').height() + 'px'
        });
    };

    $(document).on('click', '.aBtn', function (event) {
        var index = $(this).index();
        var href = $(this).attr('href');
        var name = $(this).attr('data-name');
        var $ifra = addIframe(href, index);
        var $container = $('.container');

        var $tabs = '<div class="tab active"><i></i>'+ name +'<em></em></div>';
        $('.subtitle').find('.tab').removeClass('active');
        $('.subtitle').append($tabs);

        $container.hide();
        $iframe.hide();
        $('.subinfo').append($ifra);

        $iframe = $('.subinfo').find('iframe');
        resetIframe();
        event.preventDefault();
    });

    var addIframe = function (href, dIndex) {
        var ifra = '<iframe src="' + href + '" class="iframe" data-index="' + dIndex + '" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>';
        return ifra;
    }
});
