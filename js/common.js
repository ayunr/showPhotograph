$(function(){
	$('.ch_title li').hover(function(){
		console.log($(this));
		$(this).addClass('showline').siblings().removeClass('showline');
		console.log(111);
	},function(){
		$('.ch_title li').removeClass('showline');
	});
	
	$('#content_show ul:first li em').hover(function(){
		$(this).removeClass();
		console.log(111);
	},function(){
		$(this).addClass('show_cover');
	});
});