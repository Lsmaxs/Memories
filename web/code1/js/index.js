

$(document).ready(function() {

/*首页开始*/
/*搜索框的效果*/
	$(".search").mouseover(function(){
		$(this).children('input').get(0).select();
	});
	$(".search input").focus(function(event) {
		$(this).css({"border-color":"#CE1300"});
	});
	$(".search input").blur(function(event) {
		var val=$(this).val();
		$(this).css({"border-color":"#CCC"});
		if(val==""){
			$(this).val("Search into");
		}
	});	
	$(".search label img").click(function(event) {
		var val=$(".search input").val();
		if(val=="Search into"){
			$(".search input").val("");
		}
	});

/*导航的效果*/	
	/*$(".nav-in ul li").click(function() {
		$(this).addClass('current').siblings().removeClass('current');
	});*/

/*banner的效果*/	
	var $bannerkey=0;
	var  bannerspeed=3000;
	$(".banner ol li").click(function(event) {
		$bannerkey=$(this).index();
		$(".banner ul li").fadeOut(500);
		$(".banner ul li").eq($bannerkey).fadeIn(500);
		$(this).addClass('current').siblings().removeClass('current');

	});
	var bannertimer=setInterval(bannertime, bannerspeed);
	function bannertime(){
		$bannerkey++;
		$bannerkey=$bannerkey%$(".banner ol li").length;
		$(".banner ol li").eq($bannerkey).addClass('current').siblings().removeClass('current');
		$(".banner ul li").fadeOut(500);
		$(".banner ul li").eq($bannerkey).fadeIn(500);

	}
	$(".banner").hover(function() {
		clearInterval(bannertimer);
	}, function() {
		clearInterval(bannertimer);
		bannertimer=setInterval(bannertime, bannerspeed);
	});

/*企业动态轮播图*/
	var $sanijaokey=0;
	var dttimer=setInterval(dtautoplay, 2500);
	/*$(".dongTai-bd-in ul li:last").css("margin-right":0);*/
	$(".dongTai-bd-in .sanjiao").click(function(event) {
		dtautoplay();

	});
	$(".dongTai-bd-in .sanjiao-r").click(function(event) {
		$sanijaokey--;
		if($sanijaokey<0){
			$sanijaokey=2;
			$(".dongTai-bd-in ul").css({"margin-left":-750});
			$(".dongTai-bd-in ul").stop().animate({"margin-left":-250*$sanijaokey}, 400);
		}
		$(".dongTai-bd-in ul").stop().animate({"margin-left":-250*$sanijaokey}, 400);
	});

	function dtautoplay(){
		$sanijaokey++;
		if($sanijaokey>=4){
			$sanijaokey=1;
			$(".dongTai-bd-in ul").css({"margin-left":0});
			$(".dongTai-bd-in ul").stop().animate({"margin-left":-250*$sanijaokey}, 400);
		}
		$(".dongTai-bd-in ul").stop().animate({"margin-left":-250*$sanijaokey}, 400);
	}
	$(".dongTai-bd-in").hover(function() {
		clearInterval(dttimer);
	}, function() {
		clearInterval(dttimer);
		dttimer=setInterval(dtautoplay, 2500);
	});

/*新闻资讯tab栏导航切换*/
	var Current=null;
	var timer=null;
	$(".news-hd ul li").each(function(index, el) {
		$(this).mouseenter(function(event) {
			Current=$(this);
			timer=setTimeout(fun, 200);
			function fun(){
				Current.addClass('current').siblings().removeClass('current');
				$(".news-bd-in>.ulc>li").eq(index).show().siblings().hide();
			}
		}).mouseleave(function(event) {
			clearTimeout(timer);
			timer=null;
		});
	});

/*品牌专区开始*/
/*车型图片的tab栏次导航效果*/
	var pCurrent=null;
	var ptimer=null;
	$(".middle-bd>.subnav>ul>li").each(function(index, el) {
		$(this).click(function(event) {
			pCurrent=$(this);
			ptimer=setTimeout(fun, 500);
			function fun(){
				pCurrent.addClass('current').siblings().removeClass('current');
				$(".middle-bd>.pic>ul").eq(index).show().siblings().hide();
			}
		}).mouseleave(function(event) {
			clearTimeout(ptimer);
			ptimer=null;
		});
	});
});




