$(function(){
	$(".out-bg").click(function(){
        $(this).parent().stop().fadeOut(800);
    })

    var wjimg = $('.wj-nv-area img');
	wjimg.on('mouseover mouseout',function(e){
    //var c_i = $(this).find('i');
    if(e.type === 'mouseover'){
        $(this).stop(true).animate({
        	'width':'350px','height':'162px',
        	'top':'-10px','left':'-25px',
        },300);
    }else{
        $(this).stop(true).animate({
        	'width':'300px','height':'142px',
        	'top':'0','left':'0'
        },300);

    }
 });
	// NAV
	var _winW = $(window).width();
	var navul = $('.nav-ul'),
		navliline = $('.nav-line'),
		cnavont = $('.cnav-ont'),
		sdu = 350;
	navul.on('mouseover mouseout','li',function(a){
		if(a.type === 'mouseover'){
			$(this).find('.nav-line').stop(true).animate({'width':'100%'},sdu);
			var canvo = cnavont.eq($(this).index());
			var cnavset = setTimeout(function(){
				canvo.stop(true).animate({'height':'350px','top':'132px'},sdu);
			},sdu);
			cnavont.on('mouseover mouseout',function(e){
				if(e.type === 'mouseover'){
					$(this).stop(true).animate({'height':'350px','top':'132px'},sdu);
				}else{
					$(this).stop(true).animate({'height':'0','top':'129px'},sdu);
				}
				return false;
			});
		}else{
			clearTimeout(cnavset);
			cnavont.stop(true).animate({'height':'0','top':'129px'},sdu);
			if(!$(this).hasClass('active')){
				$(this).find('.nav-line').stop(true).animate({'width':'0'},sdu);
			}
			return false;
		}
	});
	var zxchu = $('.zxchu'),
		tabright = $('.tab-right');
	zxchu.on('mouseover mouseout',function(a){
		if(a.type === 'mouseover'){
			$(this).stop(true).animate({'left':'0'},sdu);
		}else{
			$(this).stop(true).animate({'left':'85px'},sdu);
		}
	});
	$('.zxtop').click(function(){
		$('body').animate({scrollTop:'0' },200);
	});

	$(window).on('scroll',function(){
		var wintop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if (wintop > 300){
        	tabright.css('display','table');
        }else{
        	tabright.css('display','none');
        }

    });

	$(".sub .box-tips a").hover(function(){
		var $span = $(this).find("span").eq(0);
		$span.html($span.attr("data-cn"))
		Up($span, status, 5, 500)
	}, function(){
		var $span = $(this).find("span").eq(0);
		$span.html($span.attr("data-en"))
		Up($span, status, 5, 500)
	})
	if($(".nav li.cur").index() != -1){
		NavLine($(".nav li.cur").index())
	}
	
	function NavLine(n){
		$(".nav li.nav-sub").eq(n).find(".nav-line").stop().animate({width : '120px'}, 500)
	}

	$(".back-top a.top").click(function(){
		$("html, body").stop().animate({scrollTop: 0}, 1000, "linear")
	})

});

function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}
function Tab(obj, calssName, boxs){
	obj.click(function(){
        var n = $(this).index();
        $(this).addClass(calssName).siblings().removeClass(calssName)
        boxs.eq(n).show().siblings().hide();
    })
}
function FullBg(obj){
	var theWindow   = $(window),
	    $bg         = obj,
	    aspectRatio = $bg.width() / $bg.height();
	$bg.stop(false,true).fadeIn(1000);	    		
	function resizeBg() {
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('height-full');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('width-full');
		}
		if($bg.width() > theWindow.width()){
			$bg.css("margin-left", (theWindow.width() - $bg.width()) / 2)
		}else{
			$bg.addClass('width-full').css("margin-left", 0)
		}
		if($bg.height() > theWindow.height()){
			$bg.css("margin-top", (theWindow.height() - $bg.height()) / 2)
		}else{
			$bg.addClass('height-full').css("margin-top", 0)
		}
	}
	theWindow.resize(resizeBg).trigger("resize");
}
function Up(obj, status, distance, time, num){
	// status    状态 是否重置
	// distance  距离
	// time      时间
	if(!status){
		obj.css({
			top : distance,
			opacity : 0
		}).stop().animate({
			top : 0,
			opacity : 1
		}, time, "linear")
	}else{
		obj.stop().animate({
			top : 0,
			opacity : 1
		}, time, "linear")
	}
	if(obj.next().length != 0 && obj.next().index() != num){
		var TIME = setTimeout(function(){
			Up(obj.next(), status, distance, time, num)
		}, time / 2)
	}else{
		clearTimeout(TIME)
	}	
}
function Left(obj, status, distance, direction, time){
	// status    状态 是否重置
	// distance  距离 
	// direction 方向
	// time      时间
	if(!status){
		obj.css({
			left : distance,
			opacity : 0
		}).stop(true,true).animate({
			left : 0,
			opacity : 1
		}, time, "linear")
	}else{
		obj.stop(true,true).animate({
			left : 0,
			opacity : 1
		}, time, "linear")
	}
	if(direction == "prev"){	
		if(obj.prev().length != 0){
			var TIME = setTimeout(function(){
				Left(obj.prev(), status, distance, direction, time)
			}, time / 2)
		}else{
			clearTimeout(TIME)
		}
	}else{
		if(obj.next().length != 0){
			var TIME = setTimeout(function(){
				Left(obj.next(), status, distance, direction, time)
			}, time / 2)
		}else{
			clearTimeout(TIME)
		}	
	}
	
}

function navFW(){
    $(".nav-about").show(0, function(){
        var w = 0;
        for (var i = 0; i < $(".nav-about li").length; i++) {
            w = w + $(".nav-about li").eq(i).width()
        };
        $(".nav-about .in").width(w).css("left", ($(window).width() - w) / 2)
    })
}

