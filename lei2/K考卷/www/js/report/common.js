$(function(){
	$(".report-result").hover(function(){
		$(this).find(".report-resultBox").show();
	},function(){
		$(this).find(".report-resultBox").hide();
	});
	$(".report-resultBox span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	$(".report-gotop").click(function(){
		$("body,html").animate({scrollTop:0});
	});
	
	$(document).scroll(function(){
		if($(window).scrollTop()>300){
			$(".rightmnu-sty3").show();
		}else{
			$(".rightmnu-sty3").hide();
		}
	})
})
