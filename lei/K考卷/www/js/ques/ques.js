$(function(){
	var sollLeft =($(window).width()-1098)/2-92;
	$(".quesfix").css("right",sollLeft);
	
	$(".quesfix-top").click(function(){
		$("body,html").animate({scrollTop:0});
	});
	
	$(document).scroll(function(){
		if($(window).scrollTop()>300){
			$(".quesfix-top").css("display","inline-block");
		}else{
			$(".quesfix-top").css("display","none");
		}
	})
	
});
