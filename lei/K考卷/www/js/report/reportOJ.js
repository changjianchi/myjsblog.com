$(function(){
	$("#standard").click(function(){
		$.cxDialog({ 
		  title: '代码规范', 
		  info: '<img src="images/4.png" style="margin-top:10px"/>', 
		  lockScroll: true, 
		  background: '#000',
		  width:830,
		  height:560
		});
	});
	$("#thinking").click(function(){
		$.cxDialog({ 
		  title: '编程思路详解', 
		  info: '<img src="images/5.png"/>', 
		  lockScroll: true, 
		  background: '#000',
		  width:550,
		  height:600
		});
	});
});
