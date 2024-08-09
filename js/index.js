// 漢堡
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.threebar').addEventListener('click', function() {
            this.classList.toggle('active');
                });
            });
    document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.threebar').addEventListener('click', function() {
        var element = document.getElementById("activeopen");
        element.classList.toggle('active');
                  });
            });
                

//大圖輪播 
$(function () {
    let divWidth = $('.bigpicture').width()
    let imgCount = $('.content li').length

    for (let i = 0; i < imgCount; i++) {
        $('.contentButton').append(`<li></li>`)
    }
    $('.contentButton li:first').addClass('clicked')

    $('.content li').width(divWidth)  // li 的寬度
    $('.content').width(divWidth * imgCount)  // ul 的寬度

    let index = 0;
    let timer = setInterval(moveToNext, 3000);

    $('.contentButton li').click(function () {
        clearInterval(timer);    // 停掉計時器

        index = $(this).index();
        // alert(index)

        $('.content').animate({
            left: divWidth * index * -1,
        });

        $(this).addClass('clicked');
        $('.contentButton li').not(this).removeClass('clicked');;

        timer = setInterval(moveToNext, 5000);   // 重啟計時器
    })

    function moveToNext() {
        // 控制 index 只能介於 0 ~ 7 之間
        if (index < imgCount - 1) {
            index += 1;
        } else {
            index = 0;
        }

        $('.content').animate({
            left: divWidth * index * -1,
        });

        $(`.contentButton li:eq(${index})`).addClass('clicked');
        $('.contentButton li').not(`:eq(${index})`).removeClass('clicked');
    }
});

// let timer = setInterval(函數, 毫秒)
// clearInterval(timer)


//TOP5 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("top5picture01");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


//$(選擇器).事件(函數) 
//當滑鼠滑動時header背景顏色變透明，如果沒有則移除
let header = $('header')
if ($(window).scrollTop() > 0){
header.addClass(".scroll")
}else { 
header.removeClass(".scroll")
}




