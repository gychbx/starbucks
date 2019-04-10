var flag=0;
//鼠标点击事件
var search=document.getElementsByClassName("search")[0];
var keyword=document.getElementById("keyword");
search.onclick=function(){
	var expand=document.getElementsByClassName("expand")[0];
	var collapse=document.getElementsByClassName("collapse")[0];
	if(flag==0){
		keyword.style.display="block";
		expand.style.display="none";
		collapse.style.display="block"
		flag=1;
	}else{
		keyword.style.display="none";
		expand.style.display="block";
		collapse.style.display="none"
		flag=0;
	}
}

function getScrollTop(){ 
	var scrollTop=0; 
	if(document.documentElement&&document.documentElement.scrollTop){ 
		scrollTop=document.documentElement.scrollTop; 
	}else if(document.body){ 
		scrollTop=document.body.scrollTop; 
	} 
	return scrollTop; //滚动条离页面最上方的距离
} 

//鼠标滑动事件
var log=document.getElementsByClassName("log")[0];
var progress=document.getElementById("progress");
var w=window.innerHeight;
var d=document.body.clientHeight;
document.onscroll = function(){
    var scroll=getScrollTop();
	var trans=document.getElementsByClassName("top-box")[0];
	if(scroll>=100) {
		trans.style.position="fixed";
		trans.style.left="0";
		trans.style.right="0";
		trans.style.top="0";
		log.style.left="50%"
		
	}else if(scroll<100){
		trans.style.position="fixed";
		trans.style.left="10%";
		trans.style.right="10%";
		trans.style.top="24px";

	}
	 var wid=(scroll/(d-w));
	 progress.style.width=wid*100+"%";
}

var img1=document.getElementsByClassName("img");
var card1=document.getElementById("card1")
var card2=document.getElementById("card2")
var card3=document.getElementById("card3")
card1.onmouseover=function(){
	img1[0].style.transform="scale(1.2)";
}
card1.onmouseout=function(){
	img1[0].style.transform="scale(1)";
}
card2.onmouseover=function(){
	img1[1].style.transform="scale(1.2)";
}
card2.onmouseout=function(){
	img1[1].style.transform="scale(1)";
}
card3.onmouseover=function(){
	
	img1[2].style.transform="scale(1.2)";
}
card3.onmouseout=function(){

	img1[2].style.transform="scale(1)";
}
