
//无冲下拉
function simuSelect(args){
    $.extend(this,args);
    this.txtWrap=this.selectWrap.find('.wj-depsel-content');
    this.dropIco=this.selectWrap.find('.caret-self-set');
    this.optionLi=this.selectWrap.find('.wj-depsel-list');
    this.dataIpt=this.selectWrap.find('.wj-data-ipt');
    var _this=this;
    _this.txtWrap.on('click', function () {
        if(_this.dropIco.hasClass('active')) {
            _this.closeDrop();
        }else{
            _this.openDrop();
        }
    });
    _this.optionLi.on('click','li', function () {
        var dataId=$(this).data('id'),dataTxt=$(this).text();
        _this.setData(dataId, dataTxt);
        _this.closeDrop();
    });
    $(document).click(function (e) {
        if($(e.target).closest(_this.selectWrap).length < 1) {
            _this.closeDrop();
        }
    });
}
simuSelect.prototype={
    openDrop: function () {
        this.optionLi.stop(false,true).slideDown(200);
        this.dropIco.addClass('active');
    },
    closeDrop: function () {
        this.optionLi.stop(false,true).slideUp(200);
        this.dropIco.removeClass('active');
    },
    setData:function(id,txt) {
        this.dataIpt.val(id);
        this.txtWrap.text(txt);
    }
};

//画圆环
function drawRing(canvas,percent){
    var context = canvas.getContext("2d");
    var dx=105,dy=105,dr=94,dangle=2*Math.PI* percent;
    context.arc(dx, dy, dr, Math.PI*1.5, 1.5*Math.PI+dangle, false);
    context.strokeStyle="#9a99ff";
    context.lineWidth=10;
    context.stroke();
    context.beginPath();
    context.arc(dx,11,5,0,2*Math.PI,true);
    context.arc(dx+dr*Math.sin(dangle),dy-dr*Math.cos(dangle),5,0,2*Math.PI,true);
    context.closePath();
    context.fillStyle='#9a99ff';
    context.fill();
}
//清除canvas
function clearRing(canvas) {
    var canvas=document.getElementById('wjCircleDisk')
    var context = canvas.getContext("2d");
    context.clearRect(0,0,210,210);//清除画布上的指定区域；
}

//选项卡
function WjTabChange(args){
    $.extend(this,args);
    var _this=this;
    this.nextBtn=this.tabOuter.find('.wjscrl-btn-left');
    this.prevBtn=this.tabOuter.find('.wjscrl-btn-right');
    this.contentScro=this.tabOuter.find('.wj-navcont-conta');
    this.contentOffsetLeft=this.contentScro.offset().left;
    this.navUl=this.tabOuter.find('.wjSub-nav-ul');
    this.timer=null;
    this.navUl.on('click','li', function () {
        var ind=$(this).index();
        _this.tabSwitch(ind);
    });
    this.navUl.on('click','li i', function (evt) {
        evt.stopPropagation();
        var ind=$(this).closest('li').index();
        _this.closeTab(ind);
    });
    this.prevBtn.on('mousedown', function () {
        var totalLiWid=0;
        _this.navUl.find('li').each(function () {
            totalLiWid+=$(this).innerWidth();
        });
        var maxScL=totalLiWid-_this.contentScro.innerWidth();
        maxScL = maxScL>0 ? maxScL:0;
        _this.timer=setInterval(function () {
            _this.toLeft(totalLiWid,maxScL);
        },1);
    });
    this.prevBtn.on('mouseup mouseleave', function () {
        clearInterval(_this.timer);
    });

    this.nextBtn.on('mousedown', function () {
        _this.timer=setInterval(function () {
            _this.toRight();
        },1);
    });
    this.nextBtn.on('mouseup mouseleave', function () {
        clearInterval(_this.timer);
    });
}
WjTabChange.prototype={
    tabSwitch: function (i) {
        var curLi=this.navUl.children('li').eq(i);
        curLi.addClass('current').siblings().removeClass('current');
        var liOffLeft=curLi.offset().left,
            liOffRight=liOffLeft+curLi.innerWidth(),
            contRight=this.contentOffsetLeft+this.contentScro.innerWidth();
        if(liOffRight > contRight) {
            var diff=liOffRight-contRight;
            this.contentScro.scrollLeft(this.contentScro.scrollLeft()+diff);
        }else if(liOffLeft < this.contentOffsetLeft){
            var diff=this.contentOffsetLeft-liOffLeft;
            this.contentScro.scrollLeft(this.contentScro.scrollLeft()-diff);
        }
        /*重新加载iframe*/
        var ifrURL=curLi.data('href');
        if(ifrURL) {
            this.resourceFrm.src=ifrURL;
        }
    },
    closeTab: function (i) {
        if(this.navUl.children('li').eq(i+1).length > 0){
            this.tabSwitch(i+1);
        }else if(this.navUl.children('li').eq(i-1).length > 0){
            this.tabSwitch(i-1);
        }
        this.navUl.children('li').eq(i).remove();
    },
    toLeft: function (contWidth,maxScL) {
        var scL=this.contentScro.scrollLeft()+10;
        if(scL < maxScL) {
            this.contentScro.stop(true,false).animate({
                scrollLeft:scL+'px'
            },2);
        }else{
            this.contentScro.stop(true,false).animate({
                scrollLeft:maxScL+'px'
            },2);
        }
    },
    toRight: function () {
        var scL=this.contentScro.scrollLeft()-10;
        if(scL>0) {
            this.contentScro.stop(true,false).animate({
                scrollLeft:scL+'px'
            },2);
        }else{
            this.contentScro.stop(true,false).animate({
                scrollLeft:0
            },2);
        }
    }
};

//父框架高度调整 单个
function autoHeight(){
    var doc = document,
        p = window;
    p = p.parent;

    var frames = p.frames,
        frame,
        i = 0;
    while(frame = frames[i++]){
        if(frame.document == doc){
            frame.frameElement.style.height = doc.body.scrollHeight + 'px'; //
            doc = p.document;
            break;
        }
    }
}

$(function () {
    //checkbox
    //全选
    $(".wj-check-all input").click(function(){
        var thisP=$(this).parent();
        if(thisP.hasClass('checked')) {
            thisP.removeClass('checked');
            $('.wj-check-single').removeClass('checked').children().prop('checked',false);
        }else{
            thisP.addClass('checked');
            $('.wj-check-single').addClass('checked').children().prop('checked',true);
        }
    });
    $('.wj-check-single input').click(function () {
        var thisP=$(this).parent();
        if(thisP.hasClass('checked')) {
            thisP.removeClass('checked');
        }else{
            thisP.addClass('checked');
        }
        var option=$('.wj-check-single input');
        option.each(function (i) {
            if(!this.checked) {
                $('.wj-check-all').removeClass('checked').children().prop('checked',false);
                return false;
            }else{
                $('.wj-check-all').addClass('checked').children().prop('checked',true);
            }
        });
    });

    $('.wjList-refresh').hover(function () {
        $(this).children('.refres-tooltip').show();
    }, function () {
        $(this).children('.refres-tooltip').hide();
    });

});