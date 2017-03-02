$(function(){
	$(".report-prompt").hover(function(){
		$(this).addClass("report-prompt-hover");
	},function(){
		$(this).removeClass("report-prompt-hover");
	});
	$(".report-stu-score ").hover(function(){
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
	});
	$(".report-type").hover(function(){
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
	});
	

	
	$(".report-stu-img").click(function(){
		$.cxDialog({ 
		  title: '抓拍照片', 
		  info: $("#reportImg").html(), 
		  lockScroll: true, 
		   background: '#000',
		  width:620
		});
	});
	
	
})
