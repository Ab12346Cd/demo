// JavaScript Document
var b1_5_2 = document.querySelector("#b1_5_2");
var b1_6_2 = document.querySelector("#b1_6_2");
var b1_7_2 = document.querySelector("#b1_7_2");
var b1_9_2 = document.querySelector("#b1_9_2");
var b1_10_2 = document.querySelector("#b1_10_2");
var change_1 = document.querySelector("#change_1");
var change_2 = document.querySelector("#change_2");
var change_3 = document.querySelector("#change_3");
var c_1 = document.querySelector("#c_1");
var c_2 = document.querySelector("#c_2");
var c_3 = document.querySelector("#c_3");
var b2 = document.querySelector("#b2");
var b2_icon1_cover = document.querySelector("#b2_icon1_cover");
var b2_icon2_cover = document.querySelector("#b2_icon2_cover");
var b2_icon3_cover = document.querySelector("#b2_icon3_cover");
var b2_icon4_cover = document.querySelector("#b2_icon4_cover");
var b2_icon5_cover = document.querySelector("#b2_icon5_cover");
var b2_change = document.querySelector("#b2_change");
var b1_6_2 = document.querySelector("#b1_6_2");
var b1_7_2 = document.querySelector("#b1_7_2");
var b1_8_2 = document.querySelector("#b1_8_2");
var b1_9_2 = document.querySelector("#b1_9_2");
var b1_10_2 = document.querySelector("#b1_10_2");
var icon1 = document.querySelector("#icon1");
var icon1_c = document.querySelector("#icon1_c");
var icon2 = document.querySelector("#icon2");
var icon2_c = document.querySelector("#icon2_c");
var icon3 = document.querySelector("#icon3");
var icon3_c = document.querySelector("#icon3_c");
var icon4 = document.querySelector("#icon4");
var icon4_c = document.querySelector("#icon4_c");
var icon5 = document.querySelector("#icon5");
var icon5_c = document.querySelector("#icon5_c");
var icon6 = document.querySelector("#icon6");
var icon6_c = document.querySelector("#icon6_c");

b1_5_2.addEventListener("mouseover", mOver_b1_5_2, false);
b2_icon1_cover.addEventListener("mouseover", mOver_b1_5_2, false);
b1_5_2.addEventListener("mouseout", mOut_b1_5_2, false);
b2_icon1_cover.addEventListener("mouseout", mOut_b1_5_2, false);
b1_6_2.addEventListener("mouseover", mOver_b1_6_2, false);
b2_icon2_cover.addEventListener("mouseover", mOver_b1_6_2, false);
b1_6_2.addEventListener("mouseout", mOut_b1_6_2, false);
b2_icon2_cover.addEventListener("mouseout", mOut_b1_6_2, false);
b1_7_2.addEventListener("mouseover", mOver_b1_7_2, false);
b2_icon3_cover.addEventListener("mouseover", mOver_b1_7_2, false);
b1_7_2.addEventListener("mouseout", mOut_b1_7_2, false);
b2_icon3_cover.addEventListener("mouseout", mOut_b1_7_2, false);
b1_8_2.addEventListener("mouseover", mOver_b1_8_2, false);
b1_8_2.addEventListener("mouseout", mOut_b1_8_2, false);
b1_9_2.addEventListener("mouseover", mOver_b1_9_2, false);
b2_icon4_cover.addEventListener("mouseover", mOver_b1_9_2, false);
b1_9_2.addEventListener("mouseout", mOut_b1_9_2, false);
b2_icon4_cover.addEventListener("mouseout", mOut_b1_9_2, false);
b1_10_2.addEventListener("mouseover", mOver_b1_10_2, false);
b2_icon5_cover.addEventListener("mouseover", mOver_b1_10_2, false);
b1_10_2.addEventListener("mouseout", mOut_b1_10_2, false);
b2_icon5_cover.addEventListener("mouseout", mOut_b1_10_2, false);
change_1.addEventListener("click", click_c1, false);
change_2.addEventListener("click", click_c2, false);
change_3.addEventListener("click", click_c3, false);

function mOver_b1_5_2() {
   icon1.classList.add("hidden");
   icon1_c.classList.remove("hidden");
   icon1_c.classList.add("show");
   b2_icon1_cover.classList.remove("hidden");
   b2_icon1_cover.classList.add("show");
   b2_change.setAttribute("style","margin-top:320px;");
   b1_5_2.setAttribute("style","background-color:#FFC20E;color:#FFF;font-weight:bold;");
}
function mOut_b1_5_2() {
   icon1.classList.remove("hidden");  
   icon1_c.classList.remove("show");
   icon1_c.classList.add("hidden");
   b2_icon1_cover.classList.remove("show");
   b2_icon1_cover.classList.add("hidden");
   b2_change.setAttribute("style","margin-top:340px;");
   b1_5_2.removeAttribute("style");
}
function mOver_b1_6_2() {
   icon2.classList.add("hidden");
   icon2_c.classList.remove("hidden");
   icon2_c.classList.add("show");
   b2_icon2_cover.classList.remove("hidden");
   b2_icon2_cover.classList.add("show");
   b2_change.setAttribute("style","margin-top:320px;");
   b1_6_2.setAttribute("style","background-color:#FFC20E;color:#FFF;font-weight:bold;");
}
function mOut_b1_6_2() {
   icon2.classList.remove("hidden");  
   icon2_c.classList.remove("show");
   icon2_c.classList.add("hidden");
   b2_icon2_cover.classList.remove("show");
   b2_icon2_cover.classList.add("hidden");
   b2_change.setAttribute("style","margin-top:340px;");
   b1_6_2.removeAttribute("style");
}
function mOver_b1_7_2() {
   icon3.classList.add("hidden");
   icon3_c.classList.remove("hidden");
   icon3_c.classList.add("show");
   b2_icon3_cover.classList.remove("hidden");
   b2_icon3_cover.classList.add("show");
   b2_change.setAttribute("style","margin-top:320px;");
   b1_7_2.setAttribute("style","background-color:#FFC20E;color:#FFF;font-weight:bold;");
}
function mOut_b1_7_2() {
   icon3.classList.remove("hidden");  
   icon3_c.classList.remove("show");
   icon3_c.classList.add("hidden");
   b2_icon3_cover.classList.remove("show");
   b2_icon3_cover.classList.add("hidden");
   b2_change.setAttribute("style","margin-top:340px;");
   b1_7_2.removeAttribute("style");
}
function mOver_b1_8_2() {
   icon4.classList.add("hidden");
   icon4_c.classList.remove("hidden");
   icon4_c.classList.add("show");
}
function mOut_b1_8_2() {
   icon4.classList.remove("hidden");  
   icon4_c.classList.remove("show");
   icon4_c.classList.add("hidden");
}
function mOver_b1_9_2() {
   icon5.classList.add("hidden");
   icon5_c.classList.remove("hidden");
   icon5_c.classList.add("show");
   b2_icon4_cover.classList.remove("hidden");
   b2_icon4_cover.classList.add("show");
   b2_change.setAttribute("style","margin-top:320px;");
   b1_9_2.setAttribute("style","background-color:#FFC20E;color:#FFF;font-weight:bold;");
}
function mOut_b1_9_2() {
   icon5.classList.remove("hidden");  
   icon5_c.classList.remove("show");
   icon5_c.classList.add("hidden");
   b2_icon4_cover.classList.remove("show");
   b2_icon4_cover.classList.add("hidden");
   b2_change.setAttribute("style","margin-top:340px;");
   b1_9_2.removeAttribute("style");
}
function mOver_b1_10_2() {
   icon6.classList.add("hidden");
   icon6_c.classList.remove("hidden");
   icon6_c.classList.add("show");
   b2_icon5_cover.classList.remove("hidden");
   b2_icon5_cover.classList.add("show");
   b2_change.setAttribute("style","margin-top:320px;");
   b1_10_2.setAttribute("style","background-color:#FFC20E;color:#FFF;font-weight:bold;");
}
function mOut_b1_10_2() {
   icon6.classList.remove("hidden");  
   icon6_c.classList.remove("show");
   icon6_c.classList.add("hidden");
   b2_icon5_cover.classList.remove("show");
   b2_icon5_cover.classList.add("hidden");
   b2_change.setAttribute("style","margin-top:340px;");
   b1_10_2.removeAttribute("style");
}
function click_c1(){
	c_1.removeAttribute("src");
	c_1.setAttribute("src","images/c.svg");
	c_2.removeAttribute("src");
	c_2.setAttribute("src","images/c_o.svg");
	c_3.removeAttribute("src");
	c_3.setAttribute("src","images/c_o.svg");
	b2.removeAttribute("style");
	b2.setAttribute("style","background-image:url(images/banner.jpg);");
	}
function click_c2(){
	c_1.removeAttribute("src");
	c_1.setAttribute("src","images/c_o.svg");
	c_2.removeAttribute("src");
	c_2.setAttribute("src","images/c.svg");
	c_3.removeAttribute("src");
	c_3.setAttribute("src","images/c_o.svg");
	b2.removeAttribute("style");
	b2.setAttribute("style","background-image:url(images/banner2.jpg);");
	}
function click_c3(){
	c_1.removeAttribute("src");
	c_1.setAttribute("src","images/c_o.svg");
	c_2.removeAttribute("src");
	c_2.setAttribute("src","images/c_o.svg");
	c_3.removeAttribute("src");
	c_3.setAttribute("src","images/c.svg");
	b2.removeAttribute("style");
	b2.setAttribute("style","background-image:url(images/banner3.jpg);");
	}
function run(){
	setTimeout(click_c1, 2000);
	setTimeout(click_c2, 4000);
	setTimeout(click_c3, 6000);
	}
setInterval(run, 8000);