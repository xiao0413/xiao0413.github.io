function go(nowPage,theOldPage){
	if(nowPage == 1 && theOldPage < 1){
		//当前页是1，原页面小于1，表示
		//小 → 1
		$("#duocai").attr("class","in1");
	}else if(nowPage == 1 && theOldPage > 1){
		//当前页是1，原页面大于1，表示
		//大 → 1
		$("#duocai").attr("class","in2");
	}else if(theOldPage == 1 && nowPage < 1){
		//表示原页面是1，新页面小于1，表示
		//1 → 小
		$("#duocai").attr("class","out1");
	}else if(theOldPage == 1 && nowPage > 1){
		//表示原页面是1，新页面大于1，表示
		//1 → 大
		$("#duocai").attr("class","out2");
	}


	if(nowPage == 2 && theOldPage < 2){
		//小 → 2
	}else if(nowPage == 2 && theOldPage > 2){
		//大 → 2
	}else if(theOldPage == 2 && nowPage > 2){
		//2 → 大

	}else if(theOldPage == 2 && nowPage < 2){
		//2 → 小
	}

	if(nowPage == 3 && theOldPage < 3){
		//小 → 2
	}else if(nowPage == 3 && theOldPage > 3){
		//大 → 2
	}else if(theOldPage == 3 && nowPage > 3){
		//2 → 大
	}else if(theOldPage == 3 && nowPage < 3){
		//2 → 小
	}
}