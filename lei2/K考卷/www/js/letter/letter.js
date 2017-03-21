$(function(){
	$(document).on("click",".letter-type li",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	$(".letter-tiaozheng").click(function(){
		$.cxDialog({ 
		  title: '申请调整', 
		  info: $("#letter-tz").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:650,
		  height:340
		});
	});
});
