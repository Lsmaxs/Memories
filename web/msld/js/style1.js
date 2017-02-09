// JavaScript Document


$(function() { 	
   	$('.top-r i').click(function(){
		if($(this).hasClass('current')){
			$('.top').css('margin-top',-42);
			$(this).removeClass('current');
		}else {
			$('.top').css('margin-top',0);
			$(this).addClass('current');
		}
	});	
	var navtop = $('.nav').offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop()>navtop){
			$('.nav-b').css({'position':'fixed','top':0});
		}else {
			$('.nav-b').css({'position':'static'});
		}	
	});
	
	var num = 0; var timer = null;
	var myZindex=1;
	function autoplay(){
		num++;
		if(num>4){
			num=0;
		}
		myZindex++;
		$('.banner-btn li').eq(num).addClass('current').siblings().removeClass('current');
		$('.banner li').eq(num).css('z-index',myZindex).hide().fadeTo(400,1);
	}
	timer= setInterval(autoplay,5000);
	$('.banner-btn li').click(function(){
		myZindex++;
		var myself = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.banner li').eq(myself).css('z-index',myZindex).hide().fadeTo(400,1);
																					
		num = myself;
	});
	$('.banner-bg').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){  
		timer= setInterval(autoplay,5000);
	});
	
	$('.nav>li').mouseenter(function() { 
        $('.navbox').show();
		$('.navbox2-f ').mouseenter(function() {
            $(this).children('ul').show().parent().siblings().children('ul').hide();
      	});
    }).mouseleave(function(){
		$('.navbox').hide();
	});
	$('.navbox1 ul li').mouseenter(function(){
		$(this).addClass('current').siblings().removeClass('current').children().children().removeClass('current');
		
	});
	$('.showbox1 li').mouseenter(function(){
		var myIdex = $(this).index();
		$('.navbox3 li').eq(myIdex).show().siblings().hide();	
	});
	$('.showbox2 li').mouseenter(function(){
		var myIdex = $(this).index();
		$('.navbox3 li').eq(myIdex+4).show().siblings().hide();	
	});
	$('.showbox3 li').mouseenter(function(){
		var myIdex = $(this).index();
		$('.navbox3 li').eq(myIdex+7).show().siblings().hide();	
	});
	$('.showbox4 li').mouseenter(function(){
		var myIdex = $(this).index();
		$('.navbox3 li').eq(myIdex+11).show().siblings().hide();	
	});
});
	



