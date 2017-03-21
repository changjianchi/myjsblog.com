$(function() {
	$(".mguser").hover(function() {
		$(this).addClass("mguser-hover");
	}, function() {
		$(this).removeClass("mguser-hover");
	});
	
	$(".cvtype li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	
	
});

function CvNext(num){
	$(".cvDiv").css("left",-num+"%");
	$(".cvdian .active").next().addClass("active").siblings().removeClass("active");
}
function CvPrev(num){
	$(".cvDiv").css("left",-num+"%");
	$(".cvdian .active").prev().addClass("active").siblings().removeClass("active");
}