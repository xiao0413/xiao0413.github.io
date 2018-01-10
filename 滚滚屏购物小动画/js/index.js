/*
* @Author: dhl
* @Date:   2017-10-21 10:36:32
* @Last Modified by:   dhl
* @Last Modified time: 2017-10-22 15:08:38
*/

$(function(){
    $('#fullpage').fullpage({
        // 设置内容是否居中显示 true （居中显示）
        verticalCentered:false,
        //设置背景颜色
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
        // 显示导航
        navigation: true,
        // 页面之间的时间
        scrollingSpeed:1500,
        // 页面结构加载完成后触发该事件
		afterRender:function(){
			//为继续往下设置点击事件
			$(".down").on("click",function(){
				// 插件机制
				$.fn.fullpage.moveSectionDown();
				// $(this).moveSectionDown();
			})
		},
		//进入到当前屏
		afterLoad:function(anchorLink,index){
            $(this).addClass('select');
            //显示往下的按钮
            $(".down").fadeIn();

            $(".select .screen05 .mouse .handImg").on("transitionend",function(){

                 $(".screen05 .mouse .mouse02Img").show();

                 $(".screen05 .card .sofaImg").addClass('animate');
            })
            $(".select .screen06").on("transitionend",function(){
                $(".screen06 .car .workerImg").addClass('animate');
            });

            if(index==8){

                $(this).on("mousemove",function(e){

                   // 手随着鼠标移动
                   $(".screen08 .hand").css({
                      "left":e.clientX+20,
                      "top": e.clientY+20
                   });
                })


                $(".screen08 .btns").on("mouseenter",function(){

                    $(".screen08 .btns img:last-child").show();

                }).on("mouseleave",function(){

                     $(".screen08 .btns img:last-child").hide();
                })


                $(".screen08 .more").on("click",function(){

                    // 回到第一屏
                    $.fn.fullpage.moveTo(1)
                })
            }


        },
        // 离开当前页面进入到下一屏的时候
        onLeave:function(index,nextIndex,direction){
        	//继续往下按钮隐藏
        	$(".down").fadeOut();
        	 // 离开第二屏进入第三屏
        	 if(index==2 && nextIndex==3){
        	 	$(".screen02 .sofa_hide").addClass('animate').on("animationend",function(){
        	 		//当该动画执行完以后会触发该事件
        	 		$(".screen03 .size img:last-child").show();
        	 		$(".screen03 .btns img:last-child").show();
        	 	});
        	 }else if(index==3 && nextIndex==4) {
        	 	$(".screen04 .cloud").addClass('animate');
        	 	//从第三屏进入到第四屏
        	 	$(".screen03 .sofa_hide").addClass('animate').on("animationend",function(){
        	 		 $(".screen04 .cart img:first-child").show();
        	 		 $(".screen04 .cart").addClass('animate').on("transitionend",function(){
        	 		 	   $(".screen04 .text img:last-child").fadeIn(500,function(){
        	 		 	   	    $(".screen04 .address").fadeIn(500,function(){
        	 		 	   	    	 $(".screen04 .address img:last-child").fadeIn();
        	 		 	   	    });
        	 		 	   });
        	 		 });
        	 	});
        	 }else if(index==5 && nextIndex==6){

                $(".screen05 .sofa_hide").addClass('animate');
                $(".screen06 .cloud").addClass('animate');
                $(".screen06 .package").addClass('animate');
             }
        }
    });
});