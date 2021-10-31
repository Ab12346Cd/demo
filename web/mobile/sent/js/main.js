// JavaScript Document
var a_3_h;

resize();

window.onresize = function(){
  resize();
}

function myOpen() {
  var sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("active");
}

function myClose() {
  var sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("active");
}

function payPage() {
  var mh = document.getElementsByTagName("INPUT");
  for(var i =0;i<mh.length;i++){
	 if(mh[i].checked){
	   if(mh[i].value==1){
		 window.location.href="de_pay.html";
       }else if(mh[i].value==2){
         window.location.href="atm.html";
       }else if(mh[i].value==3){
         
       }
	 } 
  }
  
}

function resize(){
  // Get the size of the entire webpage
  var pageWidth  = windowWidth = window.innerWidth;
  var pageHeight  = windowHeight = window.innerHeight;
  var page= document.querySelector("#page");
  var page_num=page.innerText;
  
  if(pageWidth<=1024){
	var change = Number(pageWidth)/1024;
	
	if(page_num=="index"){
	  
	  var a_end = document.querySelector("#a_end");
	
	  a_end.setAttribute("style","margin-top:"+(pageHeight-Math.round(211*change))+"px");
	
	}else{
	  var a_end = document.querySelector("#a_end");
	
	  a_end.setAttribute("style","margin-top:"+(pageHeight-Math.round(211*change))+"px");
	}
	
	
  }else{
	var a_end = document.querySelector("#a_end");
	
	a_end.setAttribute("style","margin-top:"+(pageHeight-211)+"px");
  }
}