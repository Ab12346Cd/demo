// JavaScript Document
var a_3_h;

resize();

window.onresize = function(){
  resize();
}

function resize(){
  // Get the size of the entire webpage
  var pageWidth  = windowWidth = window.innerWidth;
  if(pageWidth<=1024){
	var change = Number(pageWidth)/1024;
	
	var container = document.querySelector("#container");
	var a_1 = document.querySelector("#a_1");
	var a_11 = document.querySelector("#a_11");
	var a_13 = document.querySelector("#a_13");
	var m_search = document.querySelector("#search");
	var a_15 = document.querySelector("#a_15");
	var a_3 = document.querySelector("#a_3");
	var a_32 = document.querySelector("#a_32");
	var b1 = document.querySelector("#b1");
	var b2 = document.querySelector("#b2");
	var a_7 = document.querySelector("#a_7");
	var b3 = document.querySelector("#b3");
	var map = document.querySelector("#map");
	var a_end = document.querySelector("#a_end");
	var menu = document.querySelector("#menu");
	var logo = document.querySelector("#logo");
	var a_31 = document.querySelector("#a_31");
	var a_32 = document.querySelector("#a_32");
	
	container.setAttribute("style","padding-left:"+Math.round(30*change)+"px;font-size:"+Math.round(36*change)+"px");
	a_1.setAttribute("style","width:"+Math.round(956*change)+"px;height:"+Math.round(97*change)+"px;padding-top:"+Math.round(30*change)+"px");
	a_11.setAttribute("style","padding-right:"+Math.round(30*change)+"px");
	a_13.setAttribute("style","width:"+Math.round(155*change)+"px");
	m_search.setAttribute("style","width:"+Math.round(80*change)+"px");
	a_15.setAttribute("style","width:"+Math.round(86*change)+"px;margin-left:"+Math.round(30*change)+"px;background-size:"+Math.round(75*change)+"px");
	/*
	var a_3_h=Math.round(257*change);
	var a_3h;
	if(a_3_h<=255){
	  a_3h=255*(change-0.4);
	}else{
	  a_3h=a_3_h;   	
	}
	*/	
	a_3.setAttribute("style","width:"+Math.round(956*change)+"px;height:"+Math.round(235*change)+"px");
	b1.setAttribute("style","width:"+Math.round(454*change)+"px");
	b2.setAttribute("style","width:"+Math.round(466*change)+"px");
	a_7.setAttribute("style","padding-left:"+Math.round(56*change)+"px;font-size:"+Math.round(40*change)+"px");
	b3.setAttribute("style","width:"+Math.round(958*change)+"px");
	map.setAttribute("style","width:"+Math.round(861*change)+"px;padding-left:"+Math.round(38*change)+"px");
	a_end.setAttribute("style","width:"+Math.round(932*change)+"px;margin-left:"+Math.round(-37*change)+"px;padding-left:"+Math.round(73*change)+"px");
	menu.setAttribute("style","width:"+Math.round(81*change)+"px");
	logo.setAttribute("style","width:"+Math.round(465*change)+"px");
	
	var sp=pageWidth-500;
	var mt=sp*23/704;
	a_31.setAttribute("style","margin-top:"+(-24+mt)+"px");
	
	var sp2=pageWidth-500;
	var mt2=sp2*22/704;
	a_32.setAttribute("style","padding-left:"+Math.round(30*change)+"px;padding-top:"+Math.round(5*change)+"px;margin-top:"+(-23+mt2)+"px");
  }
}