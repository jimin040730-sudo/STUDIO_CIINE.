// cover1111111111111111
$(function () {

    $(".cover1").hide();

    $("ul li:nth-child(1)").mouseenter(function () {

        let cover = $(this).find(".cover1");

        cover
            .stop(true, true)
            .css({
                display: 'flex',
                opacity: 0,
                visibility: 'visible',
                filter: 'brightness(2)'
            })
            .animate({
                opacity: 1
            }, {
                duration: 600,
                step: function (now) {

                    let bright = 1 + (1 - now);

                    $(this).css(
                        'filter',
                        'brightness(' + bright + ')'
                    );

                }
            });

    });



    $("ul li:nth-child(1)").mouseleave(function () {
        $(".cover1").fadeOut(300);
    });

});



// cover2222222222222222222

$(function () {

    $(".cover2").hide();

    $("ul li:nth-child(2)").mouseenter(function () {

        let cover = $(this).find(".cover2");

        cover
            .stop(true, true)
            .css({
                display: 'flex',
                opacity: 0,
                visibility: 'visible',
                filter: 'brightness(2)'
            })
            .animate({
                opacity: 1
            }, {
                duration: 600,
                step: function (now) {

                    let bright = 1 + (1 - now);

                    $(this).css(
                        'filter',
                        'brightness(' + bright + ')'
                    );

                }
            });

    });



    $("ul li:nth-child(2)").mouseleave(function () {
        $(".cover2").fadeOut(300);
    });

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