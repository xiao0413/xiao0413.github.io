(function huxi(){
	var nowimg = 0;
	var fadeInTime = 50;
	var fadeOutTime = 400;
	var interval = 2000;

	var $imagesLis = $(".banner .imagesList li");
	var $fadeCover = $(".fadeCover");
	var $circles = $(".circles li");

	//小圆点的业务
	$circles.click(function(){
		//信号量的改变
		nowimg = $(this).index();
		//调用函数
		func();
	});

	function func(){
		//先让fadeCover淡入，让全屏变黑
		$fadeCover.fadeIn(fadeInTime,function(){
			//回调函数中，就表示fadeCover淡入之后做的事情。
			//换图，换图是干蹦的。图片不是淡入淡出换的，是干蹦换的。
			//暗箱操作
			$imagesLis.eq(nowimg).addClass("cur").siblings().removeClass("cur");
			//淡出，让黑布消失
			$(this).fadeOut(fadeOutTime);
		});

		$circles.eq(nowimg).addClass("cur").siblings().removeClass("cur");
	}

	function rightButFunc(){
		//信号量的改变
		nowimg ++;
		if(nowimg > $imagesLis.length - 1){
			nowimg = 0;
		}
		//调用函数
		func();
	}

	//定时器的业务：
	var timer = setInterval(rightButFunc, interval);

	$(".banner").mouseenter(function(){
		clearInterval(timer);
	});

	$(".banner").mouseleave(function(){
		clearInterval(timer);
		timer = setInterval(rightButFunc, interval);
	});
})();