/*
* @Author: dhl
* @Date:   2017-10-23 14:30:39
* @Last Modified by:   dhl
* @Last Modified time: 2017-10-25 14:10:37
*/

var video=document.querySelector("video");
var full_btn=document.querySelector(".full-a");
var play_a=document.querySelector(".play_a");
var line=document.querySelector(".line");
var count_time=0;

var h=0,m=0,s=0;

var total_time=document.querySelector(".total_time");

var state=true;

var currentTime=document.querySelector(".currentTime");

var current_time=0;

var press=document.querySelector(".press");

//当视频能够播放的时候
video.addEventListener("canplay",function(){



	//显示视频
	video.style.display="block";

	//加载视频的总时长
	count_time=this.duration;

	h=parseInt(count_time/3600);
	m=parseInt(count_time/60);
	s=parseInt(count_time%60);

	h=h>=10?h:"0"+h;
	m=m>=10?m:"0"+m;
	s=s>=10?s:"0"+s;

	total_time.innerHTML=h+":"+m+":"+s;


	//点击播放按钮
	play_a.onclick=function(){
		if(video.paused){
			video.play();
		}else{

			video.pause();
		}
		this.classList.toggle("fa-pause");
	}


	//显示当前播放时间
	video.addEventListener("timeupdate",function(){
 	    current_time=this.currentTime;
 	    h=parseInt(current_time/3600);
		m=parseInt(current_time/60);
		s=parseInt(current_time%60);
 	    h=h>=10?h:"0"+h;
		m=m>=10?m:"0"+m;
		s=s>=10?s:"0"+s;
		currentTime.innerHTML=h+":"+m+":"+s;


		//更新当前进度条(当前播放时间/总时长*100%)
		press.style.width=current_time/count_time*100+"%";
	});


	//实现跳播效果
	line.onclick=function(e){
		 video.currentTime=e.offsetX/this.clientWidth*count_time;
	}
	//全屏
	full_btn.onclick=function(){

		video.webkitRequestFullScreen();
	}
});
