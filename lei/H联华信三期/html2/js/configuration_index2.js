
//  配置页面1-新增页面
function addNewSetPage() {
    var a1 = $(".content-container");
    var a1b1 = a1.find(".tab-content-container");
    a1b1.delegate(
        "#addNewSetPage",{
            "click":function() {
                var this1 = $(this);
                var iframe1 = '<iframe src="../html/configuration-solution/configuration_1.html" id="setFormPage1" width="100%" height="488"  frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>';
                $(this).parents(".manage-list-container").hide();
                $(this).parents(".tab-content-container").append(iframe1);

                $(window.parent.document).find('.wjNewIfr-yibiaoban').height('500px');

            }
        }
    )
}

function turnToSetPage2() {
    var a1 = $(".configure-steps-container");
    a1.delegate(
        "#turnToSetFormPage2Btn",{
            "click":function() {
                var this1 = $(this);
                var this1Form = this1.parents(".configure-form-1");
                this1Form.hide();
                this1Form.siblings(".configure-form-2").show();
            }
        }
    )
}
function backToSetPage1() {
    var a1 = $(".configure-steps-container");
    a1.delegate(
        "#backToSetFormPage1Btn",{
            "click":function() {
                var this1 = $(this);
                var this1Form = this1.parents(".configure-form-2");
                this1Form.hide();
                this1Form.siblings(".configure-form-1").show();
            }
        }
    )
}


//  布局鼠标悬停动画
function layoutMouseEnter() {
    if($(this).children("label").find("input").prop("checked") != true) {
        $(this).children(".pop-up-contain").stop(false,true).slideDown(200);
    }
}
//  布局鼠标离开动画
function layoutMouseLeave() {
    if($(this).children("label").find("input").prop("checked") != true) {
        $(this).children(".pop-up-contain").stop(false,true).slideUp(200);
    }
}
//  布局选中样式
function layoutSelected(x) {
    x.siblings(".radio-contain").removeClass("selected");
    x.siblings(".radio-contain").children(".pop-up-contain").find("p").text("选择此布局");
    x.siblings(".radio-contain").children(".pop-up-contain").find("span").removeClass("has-select-this");
    x.siblings(".radio-contain").children(".pop-up-contain").stop(false,true).slideUp(200);
    x.children(".pop-up-contain").find("p").text("已选择此布局");
    x.children(".pop-up-contain").find("span").addClass("has-select-this");
    x.addClass("selected");
}
//  配置界面2-添加新的布局页面
function addNewLayoutPage() {
    var thisBtn = $(this);
    var leftSideLiLength = thisBtn.siblings("ul").find("li").length;
    var array1 = [];

    if(leftSideLiLength < 5) {
        var pageNameNum = leftSideLiLength + 1;
        var rightSide = thisBtn.parents(".left-side").siblings(".right-side");
        var moBang = thisBtn.parents(".left-side").siblings(".hide-mo-bang").find(".radio-contain");

        array1[0] = '<li class="border-self-set-left">' + '<span class="li-text">页面' + pageNameNum  + '</span>' + '<i class="close-btn"></i></li>';
        array1[1] = '<div class="layout-page"></div>';
        array1[2] = moBang.clone(true);

        thisBtn.siblings("ul").append(array1[0]);
        thisBtn.parents(".left-side").siblings(".right-side").append(array1[1]);

        rightSide.children(".layout-page").eq(leftSideLiLength).append(array1[2]);

        thisBtn.siblings("ul").children("li").removeClass("active");
        thisBtn.siblings("ul").children("li").eq(leftSideLiLength).addClass("active");

        rightSide.find(".layout-page").removeClass("active");
        rightSide.find(".layout-page").eq(leftSideLiLength).addClass("active");

        for(var i = 0;i < 9;i++) {
            var rightSideLayout = rightSide.find(".layout-page").eq(leftSideLiLength);
            var n = i + 1;
            var newId = "setLayout" + pageNameNum  + '_' + n;
            var newName = "layoutRadio" + pageNameNum ;
            rightSideLayout.children(".radio-contain").eq(i).find("input").prop("id",newId);
            rightSideLayout.children(".radio-contain").eq(i).find("input").prop("name",newName);
            rightSideLayout.children(".radio-contain").eq(i).find("label").prop("for",newId);
        }
    }
}
//  配置界面2-布局页面切换
function leftSideUlLiClick() {
    var thisLi = $(this);
    var index2 = thisLi.index();
    var rightSide = thisLi.parents(".left-side").siblings(".right-side");
    thisLi.siblings("li").removeClass("active");
    thisLi.addClass("active");
    rightSide.find(".layout-page").removeClass("active");
    rightSide.find(".layout-page").eq(index2).addClass("active");
}
//  配置界面2-布局页面删除
function delLayoutPage(event) {
    event.stopPropagation();
    var thisCloseBtn = $(this);
    var index1 = thisCloseBtn.index();
    var leftSide = thisCloseBtn.parents(".left-side");
    var rightSide = thisCloseBtn.parents(".left-side").siblings(".right-side");

    leftSide.find("li").eq(index1).remove();
    rightSide.find(".layout-page").eq(index1).remove();

    var liCon = leftSide.find("li");
    var layoutCon = rightSide.find(".layout-page");

    liCon.removeClass("active");
    layoutCon.removeClass("active");
    liCon.eq(0).addClass("active");
    layoutCon.eq(0).addClass("active");

    for(var i = 1, len1 = liCon.length, num1 = len1 - 1; i < len1; i ++ ) {
        var len2 = i + 1;
        var array3 = [];
        array3[i] = '页面' + len2;
        liCon.eq(i).find(".li-text").text(array3[i]);
        for(var j = 0;j < 9;j++) {
            var thisLayout = layoutCon.eq(num1);
            var n = i + 1;
            var newId = "setLayout" + len1 + '_' + n;
            var newName = "layoutRadio" + len1;
            thisLayout.children(".radio-contain").eq(i).find("input").prop("id",newId);
            thisLayout.children(".radio-contain").eq(i).find("input").prop("name",newName);
            thisLayout.children(".radio-contain").eq(i).find("label").prop("for",newId);
        }
    }
}

//  配置界面2-弹出添加URL界面
function popUpURLCon(x) {
    var index1 = x.parents(".layout-page").index();
    var index2 = x.index();

    /*var popUpBlack = $(".pop-up-black-1");*/
    var pop = window.parent.parent.document.getElementById("pop-up-black-1");
    var pop2 = document.getElementById("pop-up-black-2");
    pop.style.display = "block";
    pop2.style.display = "block";

    //  获取最外层iframe窗口
    var iframe = window.parent.document.getElementById("setFormPage1");

    iframe.style.position = "relative";
    iframe.style.zIndex = "99";
    //  禁止窗口滚动
    iframe.style.overflow = "hidden";

    //  获取窗口的宽度
    /*var iframeParentWidth = window.parent.width;*/
    /*var w=document.body.scrollWidth+20;*/
    var iframeContentHeight = document.body.scrollHeight;
    //  让窗口的宽度与其父容器一致
    /*iframe.style.width = iframeParentWidth +'px';*/
    //  让窗口的宽度保持固定值
   /* iframe.style.width = 960 +'px';*/
    //  让窗口的高度变为内容的高度
    iframe.style.height = '800px';//iframeContentHeight +'px';    // '800px';//
    //  设置最外层遮罩层的z-index
    pop.style.zIndex ="50";
    /*pop.style.display="block";*/

    var addLayoutShowCon = $("#addNewURLContainer");
    var layoutShowCon = addLayoutShowCon.find(".page-n-layout-contain").find(".layout-show-contain");
    var layoutCopyCon = addLayoutShowCon.find(".layout-copy-contain");

    var copyLayout = layoutCopyCon.find(".layout").eq(index2).clone(true);

    layoutShowCon.html(copyLayout);

    /*popUpBlack.stop(false,true).fadeIn(200);*/
    addLayoutShowCon.stop(false,true).fadeIn(200);
}


//  配置界面2-布局选择页面相关函数集合
function aboutLayout() {
    var a1 = $(".configure-steps-container .URL-set-page-container");
    var configureForm2 = $(".configure-form-2");

    configureForm2.delegate(
        "#addNewLayoutPageBtn",{
            "click":addNewLayoutPage
        }
    );
    configureForm2.delegate(
        ".left-side ul li",{
            "click":leftSideUlLiClick
        }
    );
    configureForm2.delegate(
        ".left-side ul li .close-btn",{
            "click":delLayoutPage
        }
    );
    configureForm2.delegate(
        ".layout-page .radio-contain",{
            "mouseenter":layoutMouseEnter,
            "mouseleave":layoutMouseLeave,
            "click":function() {
                var thisLayout = $(this);
                layoutSelected(thisLayout);
                popUpURLCon(thisLayout);
            }
        }
    );
}


//  配置界面3-添加URL
var ConfigWinInd=0;
function aboutAddURL() {
    var a2 = $(".configure-steps-container");
    var a2b1 = $(".URL-set-page-container");
    //  点击关闭按钮关闭添加URL容器界面
    a2.delegate(
        "#closeURLConBtn,.btn-self-set",{
            "click":function() {
                var pop=window.parent.document.getElementById("pop-up-black-1");
                var pop2=document.getElementById("pop-up-black-2");
                pop.style.display="none";
                pop2.style.display="none";
               /* $(".pop-up-black-1").stop(false,true).fadeOut(200);*/
                $("#addNewURLContainer").stop(false,true).fadeOut(200);
                var iframe = window.parent.document.getElementById("setFormPage1");
                iframe.style.zIndex=1;
            }
        }
    );
    //  添加URL配置界面
    a2.delegate(
        ".layout div button,.layout div img", {
            "click":function() {

                var iframe2 = '<iframe src="../../html/configuration-solution/configuration_3.html" width="100%" height="100%" id="setFormPage2" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>';
                a2b1.append(iframe2);

                /*第几个配置窗口*/
                window.ConfigWinInd=$(this).parent().index();
                //  获取最外层iframe窗口
                var iframe = document.getElementById("setFormPage2");

                iframe.style.position = "relative";
                iframe.style.zIndex = "100";

                //  获取窗口的宽度
                var iframeParentWidth = window.parent.width;
                /*var w=document.body.scrollWidth+20;*/
                var iframeContentHeight = document.body.scrollHeight+40;
                //  让窗口的宽度与其父容器一致
                /*iframe.style.width = iframeParentWidth +'px';*/
                //  让窗口的宽度保持固定值
                iframe.style.width =  window.parent.width +'px';
                //  让窗口的高度变为内容的高度
                iframe.style.height = '99%'// iframeContentHeight +'px';

                a2b1.fadeIn(200);
                //保存窗口信息

            }
        }
    )

    a2.on('mouseenter','.layout div img', function () {
        $(this).siblings('.layout-img-mask').stop(false,true).fadeIn(100);
    }).on('mouseleave','div .layout-img-mask', function () {
        $(this).stop(false,true).fadeOut(200);
    }).on('click','.layout .layout-img-mask .img-del-btn', function () {
        $(this).parent().hide().siblings('button').show().siblings('img').remove();
    });

}


function configureSetInd(){
    var iframe = document.getElementById("setFormPage2");
    iframe.contentDocument.getElementById('wjButtonInd').innerHTML=ConfigWinInd;
}

//  配置展示内容相关
function YiBiaoBanChoose() {
    var a1 = $(".configure-step3-container");
    var a1b1 = a1.children(".YiBiaoBan-choose");
    var a1b2 = a1.children(".YiBiaoBan-ShiTu-container");
    var a1b3 = a1.children(".YiBiaoBan-SheBeiShiLi-container");
    var a1b4 = a1.children(".YiBiaoBan-TongJi-container");
    var a1b5 = a1.children(".YiBiaoBan-DiSanFang-container");

    var completeBtn = a1.find(".complete-all-URL-set-btn");
    //  点击关闭按钮关闭窗口
    a1.delegate(
        "#closeForm3Btn",{
            "click":function() {
                //  删除父元素iframe
                $(window.parent.document).contents().find("iframe").parents(".URL-set-page-container").css("display","none");
                $(window.parent.document).contents().find("iframe").remove();
            }
        }
    );
    //  点击完成配置关闭窗口
    a1.delegate(
        ".complete-all-URL-set-btn",{
            "click":function() {
                $('.YiBiaoBan-choose .radio-self-set').each(function (i) {
                    if($(this).children('i').hasClass('has-selected')){
                        var layoutInd=$('#wjButtonInd').html() * 1;
                        var playout=$(window.parent.document).find('.layout-show-contain .layout > div').eq(layoutInd);
                        var imgSrc='';
                        switch (i){
                            case 0:
                                imgSrc=$('#wjshituimg').attr('src');
                                break;
                            case 1:
                                $('.SheBeiShiLi-FangShi-img .charts-type-contain').each(function (i) {
                                    if($(this).find('.icon').hasClass('has-selected')){
                                        imgSrc=$(this).find('img').attr('src');
                                        return;
                                    }
                                });
                                break;
                            case 2:
                                $('.TongJi-FangShi-img .charts-type-contain').each(function (i) {
                                    if($(this).find('.icon').hasClass('has-selected')){
                                        imgSrc=$(this).find('img').attr('src');
                                        return;
                                    }
                                });
                                break;
                            case 3:
                                imgSrc=$('#wjDiSanFangImg').attr('src');
                        }
                        if(imgSrc != ''){
                            var str='<img src="'+imgSrc+'" />';
                            playout.find('img').remove();
                            playout.append(str);
                            playout.find('button').hide();
                        }
                        return;
                    }
                });
                //  删除父元素iframe
                $(window.parent.document).contents().find("iframe").parents(".URL-set-page-container").css("display","none");
                $(window.parent.document).contents().find("iframe").remove();
            }
        }
    );
    //  仪表板选择
    a1b1.delegate(
        "label",{
            "click":function() {
                switch($(this).children("input").prop("id")) {
                    case "YBB_1":
                        YiBiaoBanAllHide();
                        a1b2.fadeIn(200);

                        break;
                    case "YBB_2":
                        YiBiaoBanAllHide();
                        a1b3.fadeIn(200);

                        break;
                    case "YBB_3":
                        YiBiaoBanAllHide();
                        a1b4.fadeIn(200);

                        break;
                    case "YBB_4":
                        YiBiaoBanAllHide();
                        a1b5.fadeIn(200);
                        break;
                }
            }
        }
    );
    //  仪表板-视图
    a1b2.delegate(
        ".ShiTu-LeiXing label",{
            "click":function() {
                $(".ShiTu-JiFang-search").fadeIn(200);
                $(".ShiTu-JiFang-result").fadeIn(200);
            }
        }
    );
    a1b2.delegate(
        ".ShiTu-JiFang-result .result-contain-1 .result-contain-self-set li",{
            "click":function() {
                var text1 = $(this).children("span").text();
                $(this).addClass("active");
                $(this).siblings("li").removeClass("active");
                $(".ShiTu-JiFang-search").children("input[type='text']").val(text1);
            }
        }
    );
    //  仪表板-设备实例
    a1b3.delegate(
        ".SheBeiShiLi-LeiXing .btn-self-set",{
            "click":function() {
                $(".SheBeiShiLi-JiFang-search").fadeIn(200);
                $(".SheBeiShiLi-JiFang-result").fadeIn(200);
            }
        }
    );
    a1b3.delegate(
        ".SheBeiShiLi-JiFang-result .result-contain-2 .result-contain-self-set li",{
            "click":function() {
                var text1 = $(this).children("span").text();
                $(this).addClass("active");
                $(this).siblings("li").removeClass("active");
                $(".SheBeiShiLi-JiFang-search").children("input[type='text']").val(text1);
            }
        }
    );
    a1b3.delegate(
        "#SBConfirmBtn1",{
            "click":function() {
                $(".SheBeiShiLi-JiFang-result").hide();
                $(".SheBeiShiLi-XinXi").fadeIn(200);
            }
        }
    );
    a1b3.delegate(
        "#SBConfirmBtn2",{
            "click":function() {
                $(".SheBeiShiLi-FangShi-img").fadeIn(200);
                $(".SheBeiShiLi-FangShi-name").fadeIn(200);
                $(".SheBeiShiLi-FangShi-range").fadeIn(200);
                $(".SheBeiShiLi-FangShi-complete").fadeIn(200);
            }
        }
    );
    //查询显示数据 隐藏下方
    a1b3.delegate('#SBSearchBtn1',{
        'click': function () {
            $(".SheBeiShiLi-JiFang-result").fadeIn(200);
            $(".SheBeiShiLi-XinXi").fadeOut(200);
            $(".SheBeiShiLi-FangShi-img").fadeOut(200);
            $(".SheBeiShiLi-FangShi-name").fadeOut(200);
            $(".SheBeiShiLi-FangShi-range").fadeOut(200);
            $(".SheBeiShiLi-FangShi-complete").fadeOut(200);
        }
    });


    //  仪表板-统计
    a1b4.delegate(
        ".TongJi-ShiTu-result .result-contain-2 .result-contain-self-set li",{
            "click":function() {
                var text1 = $(this).children("span").text();
                $(this).addClass("active");
                $(this).siblings("li").removeClass("active");
                $(".TongJi-ShiTu-search").children("input[type='text']").val(text1);
            }
        }
    );
    a1b4.delegate(
        "#TJConfirmBtn1",{
            "click":function() {
                $(".TongJi-FangShi-img").fadeIn(200);
                $(".TongJi-FangShi-name").fadeIn(200);
                $(".TongJi-FangShi-range").fadeIn(200);
                $(".TongJi-FangShi-complete").fadeIn(200);
                $('.TongJi-ShiTu-result').hide();
            }
        }
    );
    a1b4.delegate('#TJSearchBtn1',{
        'click': function () {
            $(".TongJi-FangShi-img").fadeOut(200);
            $(".TongJi-FangShi-name").fadeOut(200);
            $(".TongJi-FangShi-range").fadeOut(200);
            $(".TongJi-FangShi-complete").fadeOut(200);
            $('.TongJi-ShiTu-result').show();
        }
    });

}
function YiBiaoBanAllHide() {
    var a1 = $(".configure-step3-container");
    var a1b1 = a1.children(".YiBiaoBan-ShiTu-container");
    var a1b2 = a1.children(".YiBiaoBan-SheBeiShiLi-container");
    var a1b3 = a1.children(".YiBiaoBan-TongJi-container");
    var a1b4 = a1.children(".YiBiaoBan-DiSanFang-container");

    a1b1.hide();
    a1b2.hide();
    a1b3.hide();
    a1b4.hide();

}


/*设备联动 ajax取数据*/
function Linkage(args){
    $.extend(this,args);
    var _this=this;

    var wrapArr=[];
    wrapArr.push(this.Level1Wrap,this.Level2Wrap,this.Level3Wrap);
    for(var ind=0;ind < wrapArr.length;ind++){
        wrapArr[ind].on('click','i',{ind:ind}, function (evt) {
            if($(this).siblings('.wj-drop-ico').hasClass('active')){
               _this.closeDrop(wrapArr[evt.data.ind]);
            }else{
                _this.openDrop(wrapArr[evt.data.ind]);
            }
        });
    }
        
    this.Level1Wrap.on('click','ul li a', function (evt) {
        _this.Level3Wrap.find('ul li:gt(0)').remove();
        _this.Level3Wrap.children('i').text(_this.Level3Wrap.find('ul li:eq(0)').text());
        _this.Level2Wrap.children('i').text(_this.Level2Wrap.find('ul li:eq(0)').text());
        var id=$(this).data('id'),txt=$(this).text();
        _this.Level1Wrap.children('i').text(txt).siblings('input').val(id);
        _this.closeDrop(_this.Level1Wrap);
        $.ajax({
            url:_this.Leve12Url,
            type:'post',
            data:'id='+id,
            success: function (msg) {
                var Lev2Ul=_this.Level2Wrap.children('ul');
                if(msg == ''){
                    Lev2Ul.find('li:gt(0)').remove();
                }else{
                    Lev2Ul.find('li:gt(0)').remove();
                   var  data=eval("("+msg+")");
                   for (var i=0 ;i < data.length; i++) {
                       var str='<li><a href="javascript:void(0)" data-id="'+data[i].id+'">'+data[i].tname+'</a></li>';
                       Lev2Ul.append(str);
                   }
                }
            }
        });
    });

    this.Level2Wrap.on('click','ul li a', function (evt) {
        var id=$(this).data('id'),txt=$(this).text();
        _this.Level2Wrap.children('i').text(txt).siblings('input').val(id);
        _this.Level3Wrap.children('i').text(_this.Level3Wrap.find('ul li:eq(0)').text());
        _this.closeDrop(_this.Level2Wrap);
        $.ajax({
            url:_this.Level3Url,
            type:'post',
            data:'id='+id,
            success: function (msg) {
                var Lev3Ul=_this.Level3Wrap.children('ul');
                if(msg == ''){
                    Lev3Ul.find('li:gt(0)').remove();
                }else{
                    Lev3Ul.find('li:gt(0)').remove();
                    var data=eval("("+msg+")");
                    for (var i=0 ;i < data.length; i++) {
                        var str='<li><a href="javascript:void(0)" data-id="'+data[i].id+'">'+data[i].tname+'</a></li>';
                        Lev3Ul.append(str);
                    }
                }
            }
        });
    });

    this.Level3Wrap.on('click','ul li a', function (evt) {
        var id=$(this).data('id'),txt=$(this).text();
        _this.Level3Wrap.children('i').text(txt).siblings('input').val(id);
        _this.closeDrop(_this.Level3Wrap);
    });
    
    $(document).click(function (e) {
        for (var i=0 ;i < wrapArr.length; i++) {
            if($(e.target).closest(wrapArr[i]).length < 1){
                _this.closeDrop(wrapArr[i]);
            }
        }
    });

}

Linkage.prototype={
    openDrop: function (dropObj) {
        dropObj.children('ul').stop(false,true).slideDown(200).siblings('.wj-drop-ico').addClass('active');
    },
    closeDrop: function (dropObj) {
        dropObj.children('ul').stop(false,true).slideUp(200).siblings('.wj-drop-ico').removeClass('active');
    }
};






