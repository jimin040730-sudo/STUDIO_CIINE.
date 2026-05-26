$(function () {
    
    $("#faq_wrap> ul> li").click(function () {
        $(this).children(".text_info").slideToggle();
    });

    $("#faq_wrap> ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");

        }

    });
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


$(".f_gnb>li:nth-child(4)").on('click', function () {
  location.href = '../studio_main.html#portfolio';
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