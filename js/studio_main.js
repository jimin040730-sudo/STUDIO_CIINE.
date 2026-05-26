// portfolio cover

$(function(){
$(".cover1").hide();

$(".p_box1 ul li:nth-child(1)").mouseenter(function(){
$(".cover1").fadeIn(500);
});

$(".p_box1 ul li:nth-child(1)").mouseleave(function(){
$(".cover1").fadeOut(500);
});
});


$(function(){
$(".cover2").hide();

$(".p_box1 ul li:nth-child(2)").mouseenter(function(){
$(".cover2").fadeIn(500);
});

$(".p_box1 ul li:nth-child(2)").mouseleave(function(){
$(".cover2").fadeOut(500);
});
});


$(function(){
$(".cover3").hide();

$(".p_box2 ul li:nth-child(1)").mouseenter(function(){
$(".cover3").fadeIn(500);
});

$(".p_box2 ul li:nth-child(1)").mouseleave(function(){
$(".cover3").fadeOut(500);
});
});


$(function(){
$(".cover4").hide();

$(".p_box2 ul li:nth-child(2)").mouseenter(function(){
$(".cover4").fadeIn(500);
});

$(".p_box2 ul li:nth-child(2)").mouseleave(function(){
$(".cover4").fadeOut(500);
});
});


$(function(){
$(".cover5").hide();

$(".p_box3 ul li:nth-child(1)").mouseenter(function(){
$(".cover5").fadeIn(500);
});

$(".p_box3 ul li:nth-child(1)").mouseleave(function(){
$(".cover5").fadeOut(500);
});
});


$(function(){
$(".cover6").hide();

$(".p_box4 ul li:nth-child(1)").mouseenter(function(){
$(".cover6").fadeIn(500);
});

$(".p_box4 ul li:nth-child(1)").mouseleave(function(){
$(".cover6").fadeOut(500);
});
});

// ===============portfolio popup=====================
$(function(){

$(".popup1").hide();

$(".button1").click(function(){
$(".popup1").fadeIn(200);
});

$(".close1").click(function(){
$(".popup1").fadeOut(200);
});

});



$(function(){

$(".popup2").hide();

$(".button2").click(function(){
$(".popup2").fadeIn(200);
});

$(".close2").click(function(){
$(".popup2").fadeOut(200);
});

});



$(function(){

$(".popup3").hide();

$(".button4").click(function(){
$(".popup3").fadeIn(200);
});

$(".close3").click(function(){
$(".popup3").fadeOut(200);
});

});



$(function(){

$(".popup4").hide();

$(".button3").click(function(){
$(".popup4").fadeIn(200);
});

$(".close4").click(function(){
$(".popup4").fadeOut(200);
});

});



$(function(){

$(".popup5").hide();

$(".button5").click(function(){
$(".popup5").fadeIn(200);
});

$(".close5").click(function(){
$(".popup5").fadeOut(200);
});

});



$(function(){

$(".popup6").hide();

$(".button6").click(function(){
$(".popup6").fadeIn(200);
});

$(".close6").click(function(){
$(".popup6").fadeOut(200);
});

});



// 창 이동 제이쿼리



$(".util>li:nth-child(3)>.submenu>li:nth-child(1)").on('click', function () {
  location.href = 'sub_page/about.html#package_wrap';
});


$(".util>li:nth-child(3)>.submenu>li:nth-child(2)").on('click', function () {
  location.href = 'sub_page/about.html#process_wrap';
});


$(".util>li:nth-child(3)>.submenu>li:nth-child(3)").on('click', function () {
  location.href = 'sub_page/about.html#helper_wrap';
});


$(".util>li:nth-child(4)>.submenu>li:nth-child(1)").on('click', function () {
  location.href = 'sub_page/notice.html#refund_wrap';
});


$(".util>li:nth-child(4)>.submenu>li:nth-child(2)").on('click', function () {
  location.href = 'sub_page/notice.html#faq_wrap';
});


$(".f_gnb>li:nth-child(6)").on('click', function () {
  location.href = 'sub_page/notice.html#faq_wrap';
});






// 마우스 커서

const cursor = document.querySelector('.custom-cursor');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();

document.addEventListener('mouseover', (e) => {
  if (e.target.closest('a, button')) {
    cursor.classList.add('active');
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('a, button')) {
    cursor.classList.remove('active');
  }
});