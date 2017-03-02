$(function(){
	$(".i-lock").height($(document).height());
	var ileft = ($(window).width()-$(".i-layer").width())/2;
	var itop = ($(window).height()-$(".i-layer").height())/2;
	$(".i-layer").css({
		left : ileft,
		top : itop
	});
	$(".i-layer-close").click(function(){
		$(".i-layerBox").hide();
	});
});
