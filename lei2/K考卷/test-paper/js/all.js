$(function() {
	Select();
	Minit();
})

function Select(){
	var a = $("body"),
		c = a.find(".selectUI");
	
	c.find("li a").click(function() {
		$(this).parent().parent().prev().find("span").html($(this).html()).parent().parent().removeClass("active")
	}), $(document).on("click", function(a) {
		c.find(".selectUI-text").each(function(c, h) {
			$(a.target).closest(h).length > 0 ? $(h).parent().toggleClass("active") : $(h).parent().removeClass("active")
		})
	})
}

function Minit(){
	
	$(".mguser").hover(function() {
		$(this).addClass("mguser-hover");
	}, function() {
		$(this).removeClass("mguser-hover");
	});
	
	var sollLeft =($(window).width()-1098)/2-50;
	$(".sollTop").css("right",sollLeft);
	
	$(".sollTop").click(function(){
		$("body,html").animate({scrollTop:0});
	});
	
	$(document).scroll(function(){
		if($(window).scrollTop()>300){
			$(".sollTop").show();
		}else{
			$(".sollTop").hide();
		}
	});
	
	$(".ques-select").click(function(){
		if($(this).parents("li").hasClass("ques-selectAct")){
			$(this).parents("li").removeClass("ques-selectAct");
		}else{
			$(this).parents("li").addClass("ques-selectAct");
		}
	});
}
