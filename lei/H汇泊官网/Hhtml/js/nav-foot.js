$(function(){
    var navHtml = [
                '<span><a href="index_n.html" target="_blank">返回首页</a></span>',
                '<span><a href="about.html" target="_blank">关于我们</a>',
                    '<em>',
                        '<a href="about.html?scor=0#scot=1" target="_blank">公司介绍</a>',
                        '<a href="about.html?scor=1#scot=1" target="_blank">来自汇泊的问候</a>',
                        '<a href="about.html?scor=2#scot=1" target="_blank">汇泊优势</a>',
                        '<a href="about.html?scor=3#scot=1" target="_blank">业务范围</a>',
                    '</em>',
                '</span>',
                '<span><a href="hui.html" target="_blank" target="_blank">慧泊车平台</a>',
                    '<em>',
                        '<a href="hui.html?scor=0" target="_blank">资本运作</a>',
                        '<a href="hui.html?scor=1" target="_blank">品牌管理</a>',
                        '<a href="hui.html?scor=2" target="_blank">大数据中心</a>',
                    '</em>',
                '</span>',
                '<span><a href="team.html" target="_blank">智团队</a>',
                    '<em>',
                        '<a href="team.html?scor=0" target="_blank">汇泊停车</a>',
                        '<a href="team.html?scor=1" target="_blank">阳光海天</a>',
                        '<a href="team.html?scor=2" target="_blank">专家团队</a>',
                        '<a href="team.html?scor=3" target="_blank">团队风采</a>',
                    '</em>',
                '</span>',
                '<span><a href="cases.html" target="_blank">经典案例</a>',
                    '<em>',
                        '<a href="cases.html?act=0" target="_blank">上海</a>',
                        '<a href="cases.html?act=1" target="_blank">南京</a>',
                        '<a href="cases.html?act=2" target="_blank">北京</a>',
                        '<a href="cases.html?act=3" target="_blank">天津</a>',
                        '<a href="cases.html?act=4" target="_blank">成都</a>',
                        '<a href="cases.html?act=5" target="_blank">广州</a>',
                    '</em>',
                '</span>',
                '<span><a href="market_n.html" target="_blank">战略分布</a></span>',
                '<span><a href="cooperation.html" target="_blank">合作模式</a>',
                    '<em>',
                        '<a href="cooperation.html?scor=0" target="_blank">合作模式</a>',
                        '<a href="cooperation.html?scor=1" target="_blank">目标项目</a>',
                    '</em>',
                '</span>',
                '<span><a href="careers.html" target="_blank">加入我们</a></span>',
                '<span><a href="contact.html" target="_blank">联系我们</a>',
                    '<em>',
                        '<a href="contact.html?scor=0" target="_blank">汇泊停车</a>',
                        '<a href="contact.html?scor=1" target="_blank">阳光海天</a>',
                    '</em>',
                '</span>',
                '<span><a href="#">EN</a></span> ',
    ];

    var footHtml = [
    '<div class="cen4-city"><img src="img/home/city.png"></div>',
    '<div class="foot">',
        '<div class="foot-nav">',
            '<em>',
                '<div class="foot-erweima">',
                    '<img src="img/home/erweima.jpg">扫描上方微信<br>了解我们更多',
                '</div>',
                '<div class="foot-lianxi-text">',
                    '<i>有任何商务、市场合作请联系：</i>',
                    '<b>400-683-4288</b>',
                    '<i>或邮箱：</i>',
                    '<p>Marketing@huiboparking.com</p>',
                '</div>',
            '</em>',
            '<span>',
                '<b>关于汇泊</b>',
                '<p><a href="about.html" target="_blank">公司介绍</a></p>',
                '<p><a href="about.html" target="_blank">来自汇泊的问候</a></p>',
                '<p><a href="about.html" target="_blank">汇泊优势</a></p>',
                '<p><a href="about.html" target="_blank">业务范围</a></p>',
            '</span>',
            '<span>',
                '<b>慧泊车平台</b>',
                '<p><a href="hui.html" target="_blank">资本运作</a></p>',
                '<p><a href="hui.html" target="_blank">品牌管理</a></p>',
                '<p><a href="hui.html" target="_blank">大数据中心</a></p>',
            '</span>',
            '<span>',
                '<b>智团队</b>',
                '<p><a href="team.html" target="_blank">汇泊停车</a></p>',
                '<p><a href="team.html" target="_blank">阳光海天</a></p>',
                '<p><a href="team.html" target="_blank">专家团队</a></p>',
                '<p><a href="team.html" target="_blank">团队风采</a></p>',
            '</span>',
            '<span>',
                '<b>经典案例</b>',
                '<p><a href="cases.html">上海</a></p>',
                '<p><a href="cases.html">南京</a></p>',
                '<p><a href="cases.html">北京</a></p>',
                '<p><a href="cases.html">天津</a></p>',
                '<p><a href="cases.html">成都</a></p>',
                '<p><a href="cases.html">广州</a></p>',
            '</span>',
            '<span>',
                '<b>战略分布</b>',
                '<p><a href="market_n.html" target="_blank">战略分布</a></p>',
            '</span>',
            '<span>',
                '<b>合作模式</b>',
                '<p><a href="cooperation.html" target="_blank">合作模式</a></p>',
                '<p><a href="cooperation.html" target="_blank">目标项目</a></p>',
            '</span>',
            '<span>',
                '<b>招贤纳士</b>',
                '<p><a href="careers.html" target="_blank">招贤纳士</a></p>',
            '</span>',
            '<span>',
                '<b>联系方式</b>',
                '<p><a href="contact.html" target="_blank">汇泊停车</a></p>',
                '<p><a href="contact.html" target="_blank">阳光海天</a></p>',
            '</span>',
        '</div>',
        '<div class="foot-bottom">',
           '<div class="foot-text">',
               '<p>',
                    '<em><a href="clause.html">隐私条款</a>  |  <a href="law.html">法律声明</a></em>',
                    '<i style="color:#484848">© We Park 2014. All rights reserved. <img src="img/guohui.png" class="guohui">沪ICP备14024579号沪公网安备31010402001077号</i>',
                '</p>',
            '</div>',
        '</div>',
    '</div>',
    
    ];
    var c='',a='';

    for(var i=0;i<navHtml.length;i++){
        c+=navHtml[i];
    }

    for(var i=0;i<footHtml.length;i++){
        a+=footHtml[i];
    }

    $('.nav2-menu').html(c);
    $('.foot-html').html(a);
    $('.nav').html(c);

    var srcA = $('.scoa');
    var scot2 = 1;
    var srcB = GetQueryString('scor');
    var scot = GetQueryString('scot');
    scot!=null?scot2=1:scot2=2;

    if(srcB!=null && srcA.length > srcB){
        srcA.eq(srcB).addClass('ani-last');
        var srcATop = srcA.eq(srcB).offset().top;
        srcA.eq(srcB).hasClass('top-op')?srcATop=srcATop-(150*scot2):true;
        console.log(srcATop,scot)
        $('html,body').animate({scrollTop: srcATop+'px'}, 2000);
    }

    function GetQueryString(name){
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
    }

    // 动态加载css文件
    function loadStyles(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    // 测试
    loadStyles("css/css.css");


    // 右侧电话邮箱
    var winHeight = $(window).height();
    $('.right-phone-email').css({'height':winHeight+'px'});

});