// JavaScript Document

$(function(){
	var oHei = document.documentElement.clientHeight;
	var oBox = $('#box ul').height();
	var len = $('#box ul li').length;
	var oNum = 0;
	
	window.onresize = function(){
		var oHei = document.documentElement.clientHeight;
		$('#box ul li').css('height',oHei+'px');
	}
	
	$('#box ul li').css('height',oHei+'px');
	var oHei = document.documentElement.clientHeight;
	$('body').mousewheel(function(event,del){
		scrol(del);
	});
	
	function scrol(del){
		if(del>0){			//向上滚动
			up();
		}else if(del<0){	// 向下滚动
			down();
		}
	}
	
	// 内容向上走
	function up(){
		if(!$('#box').is(':animated')){
			if(oNum > 0){
				oNum--;
			}
			$('#box').stop(true).animate({top:-oNum*oHei+'px'},{duration:800,easing:'easeInOutExpo',complete:function(){yd()}});
		}
	}
	
	// 内容向下走
	function down(){
		if(!$('#box').is(':animated')){
			if(oNum<len-1){
				oNum++;
			}
			$('#box').stop(true).animate({top:-oNum*oHei+'px'},{duration:800,easing:'easeInOutExpo',complete:function(){yd()}});
		}
	}
	
	function yd(){
		if(oNum == 1){
			document.title = '第二板块'
		}else if(oNum == 2){
			document.title = '第三板块'
		}else{
			document.title = '第四板块'
		}
	}
});