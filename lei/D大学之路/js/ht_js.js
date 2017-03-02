// JavaScript Document
//关于我们
    $(function(){
		$(".about_us .main8 .main8_con .main8_con_con .all").click(function(){
				$(".about_us .main8 .main8_con .main8_con_con .top").css('height','auto');
				$(this).hide();
			})
	})

//课程体系-详情
	$(function(){
		$(".tutorials_details .tutorials_details_hover").each(function(){
			var srclj=$(this).find("p").find("img").attr('src');
			$(this).hover(function(){
				$(this).find("img").attr('src',srclj+'_hover.png')
				}).mouseleave(function(){
					$(this).find("img").attr('src',srclj)	
					})
			})
	})

//课程体系	
	$(function(){
		$(".tutorials .tutorials_con ul li").each(function(){
			var srcj=$(this).find(".title").attr('src');
			var srcl=$(this).find(".suffixes").attr('src');
			$(this).hover(function(){
				$(this).find(".title").attr('src',srcj+'_hover.png');
				$(this).find(".suffixes").attr('src',srcl+'_hover.png');
				}).mouseleave(function(){
					$(this).find(".title").attr('src',srcj);
					$(this).find(".suffixes").attr('src',srcl);	
					})
			})
	})

//学科体系查询	
	$(function(){
		$(".content .top ul li").each(function(){
			var srclj=$(this).find("img").attr('src');
			$(this).hover(function(){
				$(this).find("img").attr('src',srclj+'_hover.png')
				}).mouseleave(function(){
					$(this).find("img").attr('src',srclj)	
					})
			})
	})