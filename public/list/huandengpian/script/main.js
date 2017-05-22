// JavaScript Document		by ChangJianChi

(function(){
	$(function(){
		var fn = $('.lb');
		$.each(fn,function(i,n){
			var oDiv = $(n);
			var oUl = oDiv.find('ul');
			var aLi = oUl.children('li');
			var oBtn = oDiv.children('.lb_btn');
			var aLen = aLi.length;
			var aWid = parseInt(oDiv.width());
			var iTimer = null;
			var iTime = 3000;				// 间隔运动时间
			var speed = 600;				// 运动时间
			var fs = 'easeInOutQuart';		// 运动方式
			var oNum = 0;
			var iNum = 0;
			aLi.css('width',aWid+'px');
			var first = oUl.children('li:first');
			var last = oUl.children('li:last');
				
			aLi.each(function(){
				var sp = $('<span></span>');
				var p = $('<p><i>'+$(this).children('img').attr("alt")+'</i><em></em></p>');
				$(this).append(p);
				oBtn.append(sp);
			});
			
			var f = $('<li class="li">'+first.html()+'</li>');
			var l = $('<li class="li">'+last.html()+'</li>');
			f.css('width',aWid+'px');
			l.css('width',aWid+'px');
			oUl.append(f);
			oUl.prepend(l);
			aLi = oUl.children('li');
			oUl.css({'width':(aWid*aLi.length)+'px','left':-aWid+'px'});
			
			oBtn.children('span:first').addClass('active');
			
			oBtn.children('span').on('click',function(){
				oNum = $(this).index();
				iNum = oNum;
				oUl.stop(true).animate({left:-aWid*(oNum+1)+'px'},{duration:speed,complete:fs});
				$(this).addClass('active').siblings().removeClass('active');
			});
			
			var prev = function(){
				oNum--;
				oNum = oNum%aLen;
				iNum--;
				iNum = iNum%(aLen+1);
				
				oUl.stop(true).animate({left:-aWid*(iNum+1)+'px'},{duration:speed,easing:fs,complete:function(){
					if(iNum == -1){
						oUl.css({'left':-((aWid*aLi.length)-(2*aWid))+'px'});
						iNum = aLen-1;
					}
				}});
				oBtn.children('span').eq(oNum).addClass('active').siblings().removeClass('active');
			}
			
			var next = function(){
				oNum++;
				oNum = oNum%aLen;
				iNum++;
				iNum = iNum%(aLen+1);
				oUl.stop(true).animate({left:-aWid*(iNum+1)+'px'},{duration:speed,easing:fs,complete:function(){
					if(iNum == aLen){
						oUl.css({'left':-aWid+'px'});
						iNum = 0;
					}
				}});
				oBtn.children('span').eq(oNum).addClass('active').siblings().removeClass('active');
			}
			
			var setLb = function(){
				iTimer = setInterval(function(){
					next();
				},iTime);
			}
			setLb();
			
			oDiv.children('.prev').click(function(){
				if(!oUl.is(':animated')){
					prev();
				}
			});
			oDiv.children('.next').click(function(){
				if(!oUl.is(':animated')){
					next();
				}
			});
			
			oDiv.mouseover(function(){
				clearInterval(iTimer);
				oDiv.children('.prev').css({'display':'block'});
				oDiv.children('.next').css({'display':'block'});
			}).mouseout(function(){
				setLb();
				oDiv.children('.prev').css({'display':'none'});
				oDiv.children('.next').css({'display':'none'});
			})
		})
	});
})()
