$(function(){
	$(".addQues-type a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	$(".addQues-apradio").click(function(){
		if($(this).is(":checked")){
			$(this).parents("li").addClass("active");
		}else{
			$(this).parents("li").removeClass("active");
		}
	});
});
