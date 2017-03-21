$(function(){
	$(".postjob-type li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	$(".info2-close").click(function(){
		$(this).parent().parent().remove();
	});
});
