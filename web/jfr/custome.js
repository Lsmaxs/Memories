$(document).ready(function() {
    var n=0;
$(".ctrl span").click(function(){
	/*document.title=$(this).index();*/
	n=$(this).index();
	$(".imgbox").animate({marginLeft:-1920*n,});
	$(this).addClass("current").siblings().removeClass("current");	
});
$(".arrowleft").click(function(){
	if(n<2){n++;
	}else{n=1;}
	$(".imgbox").animate({marginLeft:-1920*n,},function(){//回调函数
		if( n==2){
			$(".imgbox").css("margin-left",0);
		}	
	});
	if(n==2){$(".ctrl span").eq(0).addClass("current").siblings().removeClass("current");//调整按钮
	}else{
		$(".ctrl span").eq(n).addClass("current").siblings().removeClass("current");}
		
});
$(".arrowright").click(function(){
	if(n>0){n=n-1;
	}else{
	$(".imgbox").css("margin-left",-1920*2);
	n=1;}
	document.title=n;
	$(".imgbox").animate({marginLeft:-1920*n});
	$(".ctrl span").eq(n).addClass("current").siblings().removeClass("current");		
});
$(".leftfloat").mouseenter(function(){
	$(this).children(".bg").hide()
}).mouseleave(function(){
	$(this).children(".bg").show()
	});

$(".xuanchuan01 .xuhao").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
	$(".images01 .hide").show().siblings(".show").hide();	
});
$(".xuhao1").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
	$(".images01 .hide").hide().siblings(".show").show();
});
$(".xuanchuan02 .xuhao").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
	$(".images02 .hide").show().siblings(".show").hide();	
});
$(".xuhao1").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
	$(".images02 .hide").hide().siblings(".show").show();
});
$(".xuanchuan02 .xuhao").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
		
});
$(".xuhao1").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
	$(".images03 .hide").hide().siblings(".show").show();
});
$(".xuanchuan03 .xuhao").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
		
});

$(".first").hide();
$(".first").eq(0).show();
 $(".xuanchuan04 .xuhao").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
	
	$(".images04 .first").eq($(this).index()).show().siblings().hide();
}) ;
 
/*$(".second").hide();
$(".second").eq(0).show();*/
 $(".xuanchuan05 .xuhao").click(function(){
	$(this).addClass("background").siblings().removeClass("background");
	
	$(".images05 .first").eq($(this).index()).show().siblings().hide();
}) ;
   
});