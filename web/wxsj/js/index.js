$(function() {
		var $key=0;//控制图片
	//点击数字
	$(".banner ol li").click(function(event) {
		$key=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(".banner ul li").fadeOut(600);
		$(".banner ul li").eq($key).fadeIn(600);
	});

	//定时器
	var timer=setInterval(autoplay, 3000);
	function autoplay(){
		$(".banner ul li").fadeOut(600);
		$key++;
		/*if ($key>4) {
			$key=0;
		};*/
		$key=$key%$(".banner ul li").length;// 5/5=1--0回到第一张
		$(".banner ul li").eq($key).fadeIn(600);
		$(".banner ol li").eq($key).addClass('current').siblings().removeClass('current')
	}

	//经过隐藏左右，暂停、重启定时器
	$(".banner").hover(function() {
		clearInterval(timer);
		timer=null;//清空内存
	}, function() {
		clearInterval(timer);
		timer=setInterval(autoplay, 2000);
	});


	//case
	var $key2=0;
	$(".case ol li").click(function(event) {
		$(this).addClass('current').siblings().removeClass('current');
		$key2=$(this).index();
		var $num1=$(".zuopin").width()/4
		$(".zuopin").stop().animate({"left":-$key2*$num1},800)
	});


	//导航
	var $val=$(document).scrollTop();
	var $ser=$(".service").offset().top-60;
	var $cas=$(".case").offset().top-60;
	var $news=$(".news").offset().top-60;
	var $foot=$("footer").offset().top-60;
	$("nav ul li:eq(0)").click(function(event) {
		$("body,html").stop().animate({"scrollTop":0},800);
		$(this).addClass('current').siblings().removeClass('current');
	});
	$("nav ul li:eq(1)").click(function(event) {
		$("body,html").stop().animate({"scrollTop":$ser},800);
		$(this).addClass('current').siblings().removeClass('current');
	});
	$("nav ul li:eq(2)").click(function(event) {
		$("body,html").stop().animate({"scrollTop":$cas},800);
		$(this).addClass('current').siblings().removeClass('current');
	});
	$("nav ul li:eq(3)").click(function(event) {
		$("body,html").stop().animate({"scrollTop":$news},800);
		$(this).addClass('current').siblings().removeClass('current');
	});
	$("nav ul li:eq(4)").click(function(event) {
		$("body,html").stop().animate({"scrollTop":$foot},800);
		$(this).addClass('current').siblings().removeClass('current');
	});
	$(window).scroll(function(){
		var $val=$(document).scrollTop();
		var $ser=$(".service").offset().top-60;
		var $cas=$(".case").offset().top-60;
		var $news=$(".news").offset().top-60;
		var $foot=$("footer").offset().top-60;
		if ($val>0) {
			$("nav").css({"height":"60px"});
			$("nav ul li").css({"height":"58px","line-height":"60px"});
			$(".logo a").css({"width":"100px","height":"60px","padding-left":"88px","font-size":"20px","line-height":"60px","background":"url(images/logo2.png) no-repeat"})
		} else if ($val==0) {
			$("nav").css({"height":"100px"});
			$("nav ul li").css({"height":"98px","line-height":"100px"});
			$(".logo a").css({"width":"240px","height":"132px","padding-left":"120px","font-size":"30px","line-height":"100px","background":"url(images/logo.png) no-repeat"})
		};
	})

	var $kuan=$(document).width();
	if ($kuan<=950) {
		$(".newsin .four").fadeOut();
	} else if ($kuan>950) {
		$(".newsin .four").fadeIn();
	};
	if ($kuan<=750) {
		$(".newsin .three").fadeOut();
	} else if ($kuan>750) {
		$(".newsin .three").fadeIn();
	}
	if ($kuan<=500) {
		$(".newsin .two").fadeOut();
	} else if ($kuan>500) {
		$(".newsin .two").fadeIn();
	}
	if ($kuan<=540) {
		$("nav ul li:eq(1) a").html("服务");
		$("nav ul li:eq(2) a").html("产品");
		$("nav ul li:eq(3) a").html("咨询");
		$("nav ul li:eq(4) a").html("关于我们");
	} 

});