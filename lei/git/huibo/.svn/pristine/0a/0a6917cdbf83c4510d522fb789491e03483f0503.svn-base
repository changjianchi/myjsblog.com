
var topHtml = [
    '<b></b>',
    '<img src="img/logo.png" class="logo">',
    '<i class="table-a">',
        '<a href="tel:4006834288" class="table-cell">',
            '商务联系热线<p>4006834288</p>',
        '</a>',
    '</i>',
];

var navHtml = [
    '<div class="huibo-menu-col">',
        '<em><i>x</i>关闭</em>',
    '</div>',
    '<div class="menu-logo"><img src="img/logo.png"></div>',
    '<div class="huibo-menu-nav">',
        '<i data-in="0"><a href="javascript:;">关于我们</a></i>',
            '<em>',
                '<a href="about.html?scor=0">公司介绍</a>',
                '<a href="about.html?scor=2">来自汇泊的问候</a>',
                '<a href="about.html?scor=3">汇泊优势</a>',
                '<a href="about.html?scor=4">业务范围</a>',
            '</em>',
        '<i data-in="1"><a href="javascript:;">慧泊车平台</a></i>',
            '<em>',
                '<a href="hui.html?scor=0">产业化投资</a>',
                '<a href="hui.html?scor=2">品牌化经营</a>',
                '<a href="hui.html?scor=2">智能化管理</a>',
            '</em>',    
        '<i data-in="2"><a href="javascript:;">智团队</a></i>',
            '<em>',
                '<a href="team.html?scor=0">汇泊停车</a>',
                '<a href="team.html?scor=2">阳光海天</a>',
                '<a href="team.html?scor=3">专家团队</a>',
                '<a href="team.html?scor=4">团队风采</a>',
            '</em>',
        '<i data-in="3"><a href="javascript:;">经典案例</a></i>',
            '<em>',
                '<a href="cases.html">上海</a>',
                '<a href="cases.html?scor=3">南京</a>',
                '<a href="cases.html?scor=4">北京</a>',
                '<a href="cases.html?scor=5">天津</a>',
                '<a href="cases.html?scor=6">成都</a>',
                '<a href="cases.html?scor=9">重庆</a>',
                '<a href="cases.html?scor=10">广州</a>',
            '</em>',
        '<i data-in="4"><a href="market.html">战略分布</a></i>',
            '<em class="none"></em>',
        '<i data-in="5"><a href="javascript:;">合作模式</a></i>',
            '<em>',
                '<a href="cooperation.html?scor=1">合作模式</a>',
                '<a href="cooperation.html?scor=2">目标项目</a>',
            '</em>',
        '<i data-in="6"><a href="careers.html">加入我们</a></i>',
            '<em class="none"></em>',
        '<i data-in="7"><a href="javascript:;">联系我们</a></i>',
            '<em>',
                '<a href="contact.html?scor=0">汇泊停车</a>',
                '<a href="contact.html?scor=2">阳光海天</a>',
            '</em>',
        '<i><a href="index.html">返回首页</a></i>',
        '<i><a href="#">EN</a></i>',
    '</div>',
    '<div class="a-menu-last">',
        '<i><a href="tel:4006834288">商务热线：<b>400 683 4288</b></a></i>',
        '<i><a href="mailto:Marketing@huiboparking.com">邮箱：Marketing@huiboparking.com</a></i>',
    '</div>',
];

var footHtml = [
    '<div class="foot-top">',
        '<div class="foot-erweima">',
            '<div class="foot-erweima-img">',
                '<img src="img/foot-erweima.jpg">',
                '扫描上方微信<br>了解我们更多',
            '</div>',
            '<div class="foot-dianhua">',
                '<span>有任何商务、市场合作请联系：</span>',
                '<b><a href="tel:4006834288">400-683-4288</a></b>',
                '<span>或邮箱：</span>',
                '<i><a href="mailto:Marketing@huiboparking.com">Marketing@huiboparking.com</a></i>',
            '</div>',
        '</div>',
        '<div class="foot-bottom">',
            '<em><a href="clause.html">隐私条款</a> | <a href="law.html">法律声明</a></em>',
            '© WE PARK 2017. All rights reserved. ',
        '</div>',
    '</div>',
];

var cHtml='',aHtml='',bHtml='';

for(var i=0;i<navHtml.length;i++){
    bHtml+=navHtml[i];
}

for(var i=0;i<footHtml.length;i++){
    cHtml+=footHtml[i];
}

for(var i=0;i<topHtml.length;i++){
    aHtml+=topHtml[i];
}

$('.huibo-nav').html(aHtml);
$('.huibo-menu').html(bHtml);
$('.foot').html(cHtml);

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

var Tfm = {
    nav: $('.huibo-menu-nav'),
    nav_i: $('.huibo-menu-nav').find('i'),
    nav_em: $('.huibo-menu-nav').find('em'),
    nav_em_iHeight: $('.huibo-menu-nav').find('i').height(),
    removeEm: function(){
        Tfm.nav_em.removeClass('act');
        Tfm.nav_em.css({'height':0});
        Tfm.nav_i.removeClass('active');
    },
    addEm: function(c){
        var Tha = Tfm.nav_em.eq(c);
        Tha.addClass('act');
        Tha.css({
            'height':Tha.find('a').length*Tfm.nav_em_iHeight+Tha.find('a').length+'px'
        });
    }
};

Tfm.nav.on('click','i',function(){
    Tfm.ind_i = $(this).attr('data-in');
    if($(this).hasClass('active')){
        Tfm.removeEm();
    }else{
        Tfm.removeEm();
        $(this).addClass('active');
        Tfm.addEm(Tfm.ind_i);
    }
});

function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}