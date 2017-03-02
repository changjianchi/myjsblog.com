/*弹出层插件*/
//顶部提示信息调用
jQuery.extend({
    wjNotify: function () {
        var txt=arguments[0]?arguments[0]:'提示信息',
            state=arguments[1]?arguments[1]:'success',
            time=arguments[2]?arguments[2]:3000;

        var str='<div class="wj-new-prompt"> <div class="wj-newprpt-pic newprpt-'+state+'"></div> <div class="wj-newprpt-txt">'+txt+'</div> </div>';

        var $parent=$('body',window.top.document);
        $parent.find('.wj-new-prompt').remove();
        if($parent.nofityTimer){
            clearTimeout($parent.nofityTimer);
        }
        $parent.append(str);
        $parent.find('.wj-new-prompt').fadeIn();
        $parent.nofityTimer=setTimeout(function () {
            $parent.find('.wj-new-prompt').remove();
        },time);
    },
    wjConfirm: function () {
        var txt=arguments[0]?arguments[0]:'确定要删除吗？';
        var callback=arguments[1]?arguments[1]:'';

        var str='<div class="wj-complete-alert"> <div class="wj-compcof-tick"></div> <div class="wj-compcof-txt">'+txt+'</div> <div class="wj-compcof-btn"> <a class="wj-combtn-cancle pull-left" href="javascript:;">取消</a> <a class="wj-combtn-confirm pull-right" href="javascript:;">确定</a> </div> </div>';

        var dom=$(str);
        var $parent=$('body',window.top.document);

        dom.appendTo($parent);
        $parent.find('.wj-popup-mask').show();

        $parent.find('.wj-complete-alert .wj-combtn-cancle').on('click', function () {
            $(this).closest('.wj-complete-alert').remove();
            $parent.find('.wj-popup-mask').hide();
        });

        var btnOk = function (callback) {
            $parent.find('.wj-complete-alert .wj-combtn-confirm').click(function () {
                $(this).closest('.wj-complete-alert').remove();
                $parent.find('.wj-popup-mask').hide();
                if (typeof (callback) == 'function') {
                    callback();
                }
            });
        };

        btnOk(callback);

    }
});


//  下拉菜单鼠绑定事件
function topDropDown() {
    var a = $(".js-drop-menu1");

    a.delegate(
        a,{
            "mouseenter":function() {
                /*$(this).find(".js-drop-list1").css("display","block");*/
                $(this).find(".js-drop-list1").stop(true,true).slideDown(100);
            },
            "mouseleave":function() {
                $(this).find(".js-drop-list1").stop(true,true).slideUp(1);
                /*$(this).find(".js-drop-list1").css("display","none");*/
            }
        }
    )
}
//  顶部搜索按钮可用状态
function inputFocus1() {
    var a1 = $("#topSearchInput");
    var a2 = $("#topSearchSubmit");
    a1.focus(function() {
        a1.addClass("active");
        a2.attr("disabled",false);
    });
    a1.blur(function() {
        a1.removeClass("active");
        a2.attr("disabled",true);
    });

}
//  顶部更改按钮
function topChangeBtn() {
    var a1 = $(".self-set-button-contain");
    var a1b1 = a1.children(".show-button-contain");
    var a1b2c1 = $("#selSetBtnHasSel1");
    var a1b2c2 = $("#selSetBtnNotSel1");
    var a2 = $("#topTabUl");
    var a3 = $(".content-container");

    a1b2c1.delegate(
        ".self-set-btn-list a span",{
            "click":function() {
                var index1 = $(this).parents(".self-set-btn-list").index();
                a1b1.children(".self-set-btn-list").eq(index1).remove();
                $(this).parent("a").siblings(".tooltip").remove();
                a1b2c2.append($(this).parents(".self-set-btn-list").clone());
                $(this).parents(".self-set-btn-list").remove();
                $('[data-toggle="tooltip"]').tooltip();
            }
        }
    );
    a1b2c2.delegate(
        ".self-set-btn-list a",{
            "click":function() {
                var thisParentsClone = $(this).parent(".self-set-btn-list");
                var len1 = a1b2c1.children(".self-set-btn-list").length;
                if(len1 < 4) {
                    $(this).siblings(".tooltip").remove();
                    a1b2c1.append(thisParentsClone.clone());
                    a1b1.append(thisParentsClone.clone());
                    thisParentsClone.remove();
                    $('[data-toggle="tooltip"]').tooltip();
                }
            }
        }
    );
    a1b1.on('click','.self-set-btn-list a',function(event){
        event.preventDefault();
        $(this).siblings('.tooltip').remove();
        var this1 = $(this);
        var aText1;
        var a2b1 = a2.children("li");
        var a3b1 = a3.children(".tab-content-container");
        var num1 = 0;

        //  判断文字内容
         aText1 = this1.data('original-title');

        var boundBox=$('.scroll-content-contain');
        var boundLeft=boundBox.offset().left;
        var boundRigth=boundBox.innerWidth()+boundLeft;

        //  判断页面是否已经存在
        for(var i = 0;i < a2b1.length; i++) {
            //  如果存在
            if(a2b1.eq(i).children("span").text() == aText1) {
                a2b1.removeClass("active");
                a2b1.eq(i).addClass("active");
                a3b1.removeClass("has-load-show");
                a3b1.addClass("has-load-hide");
                a3b1.eq(i).removeClass("has-load-hide");
                a3b1.eq(i).addClass("has-load-show");
                num1 = 1;

                var curMenu=a2b1.eq(i);
                var menuLeft=curMenu.offset().left ;
                var menuRight=menuLeft + curMenu.innerWidth();
                if(menuLeft < boundLeft){
                    var diff=boundLeft-menuLeft;
                    boundBox.scrollLeft(boundBox.scrollLeft() - diff);
                }else if(menuRight > boundRigth){
                    var curScroll=boundBox.scrollLeft();
                    var diff=menuRight-boundRigth;
                    boundBox.scrollLeft(curScroll+diff);
                }
            }
        }
        //  如果不存在
        if(num1 != 1) {
            a2.children("li").removeClass("active");
            a3b1.removeClass("has-load-show");
            a3b1.addClass("has-load-hide");
            a2.append("<li class='active'><span>" + aText1 +"</span><i>X</i></li>");
            a3.append('<div class="tab-content-container has-load-show"></div>');

            var lastLi=a2.children().last();
            var menuLeft=lastLi.offset().left ;
            var menuRight=menuLeft + lastLi.innerWidth();
            if(menuRight > boundRigth){ //最后加的元素右侧过右边界
                var curScroll=boundBox.scrollLeft();
                var diff=menuRight-boundRigth;
                boundBox.scrollLeft(curScroll+diff);
            }

            //动态加 iframe
            var curName=$(this).data('name');
            curName=curName ? curName : 'unnameed';
            var src=$(this).attr('href');
            var anewIframe = '<iframe src="'+src+'" class="tabNewIframe '+('wjNewIfr-'+curName)+'" width="100%" height="100%" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>';
            var lastChild=a3.find('.tab-content-container').last();
            lastChild.append(anewIframe);
           /* lastChild.find('.tabNewIframe').load(function () {
                var mainheight = $(this).contents().find("body").height() + 10;
                $(this).height(mainheight);
            });*/
        }

    });
}
//  顶部消息栏切换
function topInfoChange() {
    var a1 = $("#infoPageContain");
    var a2= $("#infoContent");
    var infoLi = a2.children("ul").find("li");
    var infoLiWidth = infoLi.width();
    var infoLiLen = infoLi.length;

    a2.children("ul").width(infoLiLen * infoLiWidth);
    a1.delegate(
        ".page-btn-prev",{
            "click":function() {
                var thisPage1 = parseInt(a1.children(".page-content").find(".this-page-num").text());
                if(thisPage1 > 1 && thisPage1 < 9) {
                    a2.stop(false,true).animate({
                        scrollLeft: a2.scrollLeft() - infoLiWidth
                    },200);
                    a1.children(".page-content").find(".this-page-num").text(thisPage1 - 1);
                }
            }
        }
    );
    a1.delegate(
        ".page-btn-next",{
            "click":function() {
                var thisPage1 = parseInt(a1.children(".page-content").find(".this-page-num").text());

                if(thisPage1 > 0 && thisPage1 < 8) {
                    a2.stop(false,true).animate({
                        scrollLeft: a2.scrollLeft() + infoLiWidth
                    },200);
                    a1.children(".page-content").find(".this-page-num").text(thisPage1 + 1);
                }
            }
        }
    )
}
//  顶部个人空间改变风格
function changeStyle1() {
    var a1 = $("#changeStyleUl1");
    var a2 = $(".top-top-container");

    a1.delegate(
        "li",{
            "click":function() {
                var index1 = $(this).index();
                cleanStyle(a2);
                addStyle(a2,index1);
            }
        }
    );
    //  添加指定的样式
    function addStyle(x,n) {
        var arry1 = new Array();
        arry1 = ['self-set-style-black','self-set-style-gray','self-set-style-cyan','self-set-style-blue','self-set-style-darkBlue','self-set-style-purple'];
        x.addClass(arry1[n]);
    }
    //  清除其他颜色风格样式
    function cleanStyle(x) {
        x.removeClass("self-set-style-black");x.removeClass("self-set-style-gray");x.removeClass("self-set-style-cyan");
        x.removeClass("self-set-style-blue");x.removeClass("self-set-style-darkBlue");x.removeClass("self-set-style-purple");
    }
}
//  点击导航添加页面
function topAddTab() {
    var a1 = $(".nav-a-jump");
    var a2 = $("#topTabUl");
    var a3 = $(".content-container");
    a1.click(function(event) {
        event.preventDefault();
        var this1 = $(this);
        var aText1;
        var a2b1 = a2.children("li");
        var a3b1 = a3.children(".tab-content-container");
        var num1 = 0;

        //  判断文字内容
        switch (this1.text()) {
            default:
                aText1 = this1.text();
        }

        var boundBox=$('.scroll-content-contain');
        var boundLeft=boundBox.offset().left;
        var boundRigth=boundBox.innerWidth()+boundLeft;

        //  判断页面是否已经存在
        for(var i = 0;i < a2b1.length; i++) {
            //  如果存在
            if(a2b1.eq(i).children("span").text() == aText1) {
                a2b1.removeClass("active");
                a2b1.eq(i).addClass("active");
                a3b1.removeClass("has-load-show");
                a3b1.addClass("has-load-hide");
                a3b1.eq(i).removeClass("has-load-hide");
                a3b1.eq(i).addClass("has-load-show");
                num1 = 1;

                var curMenu=a2b1.eq(i);
                var menuLeft=curMenu.offset().left ;
                var menuRight=menuLeft + curMenu.innerWidth();
                if(menuLeft < boundLeft){
                    var diff=boundLeft-menuLeft;
                    boundBox.scrollLeft(boundBox.scrollLeft() - diff);
                }else if(menuRight > boundRigth){
                    var curScroll=boundBox.scrollLeft();
                    var diff=menuRight-boundRigth;
                    boundBox.scrollLeft(curScroll+diff);
                }
            }
        }
        //  如果不存在
        if(num1 != 1) {
            a2.children("li").removeClass("active");
            a3b1.removeClass("has-load-show");
            a3b1.addClass("has-load-hide");
            a2.append("<li class='active'><span>" + aText1 +"</span><i>X</i></li>");
            a3.append('<div class="tab-content-container has-load-show"></div>');

            var lastLi=a2.children().last();
            var menuLeft=lastLi.offset().left ;
            var menuRight=menuLeft + lastLi.innerWidth();
            if(menuRight > boundRigth){ //最后加的元素右侧过右边界
                var curScroll=boundBox.scrollLeft();
                var diff=menuRight-boundRigth;
                boundBox.scrollLeft(curScroll+diff);
            }

            //动态加 iframe
            var curName=$(this).data('name');
            curName=curName ? curName : 'unnameed';
            var src=$(this).attr('href');
            var anewIframe = '<iframe src="'+src+'" class="tabNewIframe '+('wjNewIfr-'+curName)+'" width="100%" height="100%" frameborder="0"  marginheight="0" marginwidth="0"></iframe>';
            var lastChild=a3.find('.tab-content-container').last();
            lastChild.append(anewIframe);
            /*lastChild.find('.tabNewIframe').load(function () {
                var mainheight = $(this).contents().find("body").height() + 10;
                $(this).height(mainheight);
            });*/

        }

    });
}
//  tab栏切换
function topTabScr() {
    var navTabCon = $(".nav-tab-container");
    navTabCon.delegate(
        "#scrTabRightBtn",{
            "mousedown":function() {
                var totalWidth=10;
                $('#topTabUl li').each(function () {
                    totalWidth+=$(this).innerWidth();
                });
               // console.log(totalWidth);
                var time1 = setInterval(function () {
                    scrLeft1(totalWidth);
                },10);
                $(this).mouseup(function() {
                    clearInterval(time1);
                });
            }
        }
    );
    navTabCon.delegate(
        "#scrTabLeftBtn",{
            "mousedown":function() {
                var time1 = setInterval(scrRight1,2);
                $(this).mouseup(function() {
                    clearInterval(time1);
                });
            }
        }
    );
    // 无缝持续滚动
    function scrLeft1(rightBound) {
        var scrConUl = $(".scroll-content-contain");
        var scrSum = scrConUl.scrollLeft() + 6;
        //console.log(scrSum);
        if(scrSum > rightBound - scrConUl.innerWidth()) return;
        scrConUl.stop(true,false).animate({
            scrollLeft: scrSum + "px"
        },2);
    }
    function scrRight1() {
        var scrConUl = $(".scroll-content-contain");
        var scrSum = scrConUl.scrollLeft() - 6;
        scrConUl.stop(true,false).animate({
            scrollLeft: scrSum + "px"
        },2);
    }
}
//  选项卡点击选中以及删除事件
function topTabDel() {
    var a1 = $("#topTabUl");
    a1.delegate(
        "li",{
            "click":function() {
                var this1 = $(this);
                var index1 = this1.index();
                var a2 = $(".tab-content-container");
                this1.siblings("li").removeClass("active");
                this1.addClass("active");
                a2.removeClass("has-load-show");
                a2.addClass("has-load-hide");
                a2.eq(index1).removeClass("has-load-hide");
                a2.eq(index1).addClass("has-load-show");
            }
        }
    );
    a1.delegate(
        "li i",{
            "click":function(evt) {
                evt.stopPropagation();
                var this1 = $(this);
                var this1P = this1.parent("li");
                var index1 = this1P.index();
                var a2 = $(".tab-content-container");
                if(this1P.hasClass("active")) {
                    this1P.siblings("li").removeClass("active");
                    this1P.prev("li").addClass("active");
                    this1P.remove();

                    a2.removeClass("has-load-show");
                    a2.addClass("has-load-hide");
                    a2.eq(index1).prev().removeClass("has-load-hide");
                    a2.eq(index1).prev().addClass("has-load-show");
                    a2.eq(index1).remove();
                }
                else {
                    this1P.remove();
                    a2.eq(index1).remove();
                }
                /*a2.removeClass("has-load-show");
                 a2.eq(index1).prev(".tab-content-container").removeClass("has-load-hide");
                 a2.eq(index1).prev(".tab-content-container").addClass("has-load-show");
                 a2.eq(index1).remove();*/
            }
        }
    )

}
//  下拉选择框
function dropSelSet() {
    var drop1 = $(".dropDown-self-set");
    //  下拉列表出现事件
    /*drop1.delegate(
        ".select-content",{
            "click":function(event) {
                event.stopPropagation();
                if($(this).siblings(".caret-self-set").hasClass("active")) {
                    $(this).siblings(".caret-self-set").removeClass("active");
                    $(this).parents(".dropDown-self-set").removeClass("border-color");
                    $(this).siblings(".select-list").stop(false,true).slideUp(200);
                }
                else {
                    $(this).siblings(".caret-self-set").addClass("active");
                    $(this).parents(".dropDown-self-set").addClass("border-color");
                    $(this).siblings(".select-list").stop(false,true).slideDown(200);
                }
            }
        }
    );*/

    $('.dropDown-self-set .select-content').on('click', function (event) {
        event.stopPropagation();
        if($(this).siblings(".caret-self-set").hasClass("active")) {
            $(this).siblings(".caret-self-set").removeClass("active");
            $(this).parents(".dropDown-self-set").removeClass("border-color");
            $(this).siblings(".select-list").stop(false,true).slideUp(200);
        }
        else {
            $(this).siblings(".caret-self-set").addClass("active");
            $(this).parents(".dropDown-self-set").addClass("border-color");
            $(this).siblings(".select-list").stop(false,true).slideDown(200);
        }
    });


    $('.dropDown-self-set .caret-self-set').on('click', function (event) {
        event.stopPropagation();
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parents(".dropDown-self-set").removeClass("border-color");
            $(this).siblings(".select-list").stop(false,true).slideUp(200);
        }
        else {
            $(this).addClass("active");
            $(this).parents(".dropDown-self-set").addClass("border-color");
            $(this).siblings(".select-list").stop(false,true).slideDown(200);
        }
    });


    //  点击其他地方收起下拉列表事件
    $(document).click(function() {
        drop1.find(".caret-self-set").removeClass("active");
        drop1.removeClass("border-color");
        drop1.find(".select-list").stop(false,true).slideUp(200);
    });
    //  点击列表选择内容
    drop1.delegate(
        ".select-list li",{
            "click":function() {
                var this1 = $(this);
                var text1 = this1.text(),dataid=this1.data('id');
                this1.parent(".select-list").siblings("p").text(text1);
                //this1.parent(".select-list").siblings("input").val(text1);
                this1.parent(".select-list").siblings("input").val(dataid);
            }
        }
    )
}
//  单选框选中切换背景图
function selfSetRadioChangeBg() {
    $(".radio-only-contain").delegate(
        ".radio-self-set",{
            "click":function() {
                if($(this).children("input").prop("checked") == true) {
                    $(this).children(".icon").addClass("has-selected");
                    $(this).siblings(".radio-self-set").children(".icon").removeClass("has-selected");
                }
            }
        }
    );
    $(".radio-and-img-contain").delegate(
        ".radio-self-set",{
            "click":function() {
                if($(this).children("input").prop("checked") == true) {
                    $(this).children(".icon").addClass("has-selected");
                    $(this).parents(".charts-type-contain").siblings(".charts-type-contain").children(".radio-self-set").children(".icon").removeClass("has-selected");
                }
            }
        }
    )
}

//声音开关
function wjChangeVoice(){
    var chIco=$('.icon-change-voice');
    chIco.parent('a').on('click', function () {
        if(chIco.hasClass('active')){
            chIco.removeClass('active');
            $(this).children('span').text('开启声音');
        }else{
            chIco.addClass('active');
            $(this).children('span').text('关闭声音');
        }
    });
}

function commonFunction1() {
    //  下拉动画
    topDropDown();
    //  搜索框动画
    inputFocus1();
    //  自定义按钮选择
    topChangeBtn();
    //  顶部消息栏切换
    topInfoChange();
    //  顶部个人空间改变风格
    changeStyle1();
    //  点击导航生成新的页面容器
    topAddTab();
    //  Tab栏切换
    topTabScr();
    //  Tab与对应内容页的删除与出现
    topTabDel();
    //  下拉选择框
    dropSelSet();
    //  自定义单选框改变背景图
    selfSetRadioChangeBg();
    //声音开关
    wjChangeVoice();
}

/*初始化弹出层遮罩*/
function InitPop(){
    var wHeight=$(window).innerHeight(),
        wWidth=$(window).innerWidth();
    $('.wj-popup-mask').css({'width':wWidth,'height':wHeight});
    $(window).resize(function () {
        wWidth=$(window).innerWidth(),
            wHeight=$(window).innerHeight();
        $('.wj-popup-mask').css({'width':wWidth,'height':wHeight});
    });
}

function wjPromptHide(obj){
    var defaultVal=obj.defaultValue,
        val=obj.value;
    if(defaultVal == val){
        obj.value='';
    }
}

function wjPromptShow(obj){
    var defaultVal=obj.defaultValue,
        val=obj.value;
    if(val == '' || val==defaultVal){
        obj.value=defaultVal;
    }
}
