// jQuery
$('.title').click(function(){

    // A 영역 슬라이드 토글
    $(this).next('.text_info').stop().slideToggle();

    // 현재 li 찾기
    let parentLi = $(this).closest('li');

    // plus / minus 토글
    parentLi.find('.plus').toggle();
    parentLi.find('.minus').toggle();

});


// 창 이동 제이쿼리



$(".util>li:nth-child(2)").on('click', function () {
  location.href = '../studio_main.html#portfolio';
});


$(".util>li:nth-child(3)>.submenu>li:nth-child(1)").on('click', function () {
  location.href = 'about.html#package_wrap';
});


$(".util>li:nth-child(3)>.submenu>li:nth-child(2)").on('click', function () {
  location.href = 'about.html#process_wrap';
});


$(".util>li:nth-child(3)>.submenu>li:nth-child(3)").on('click', function () {
  location.href = 'about.html#helper_wrap';
});


$(".util>li:nth-child(4)>.submenu>li:nth-child(1)").on('click', function () {
  location.href = 'notice.html#refund_wrap';
});


$(".util>li:nth-child(4)>.submenu>li:nth-child(2)").on('click', function () {
  location.href = 'notice.html#faq_wrap';
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