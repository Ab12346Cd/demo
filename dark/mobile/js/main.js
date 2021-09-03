// JavaScript Document
function myFunction() {
  var menu = document.getElementById("image1");
  var submenu = document.getElementById("s_menu");
  var select1 = document.getElementById("select1");
  var m4_1 = document.getElementById("m4_1");
  var image1 = document.getElementById("image1");
  
  if (menu.style.display === "block") {
    menu.style.display = "block";
	  if(submenu.style.display === "block"){
	    submenu.style.display = "none";
		select1.style.display = "block";
		m4_1.style.marginTop = "123px";
		image1.style.marginTop = "16px";
	  }else{
		submenu.style.display = "block";
		select1.style.display = "none";
		m4_1.style.marginTop = "143px";
		image1.style.marginTop = "3px";
	  }
  } else {
    menu.style.display = "block";
	submenu.style.display = "block";
	select1.style.display = "none";
	m4_1.style.marginTop = "143px";
	image1.style.marginTop = "3px";
  }
}