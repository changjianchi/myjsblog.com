$(function(){
	$(".regisit-send").click(function(){
		$.cxDialog({ 
		  title: '验证码', 
		  info: $("#verificationCode").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:350,
		  okText:"确认",
		  ok:function(){
		  	
		  }
		});
	});
});
