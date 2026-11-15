'use strict';

$(function () {
    //header
    var $header = $('header');

    $(window).scroll(function () {
        // 상단메뉴 고정
        if ($(this).scrollTop() > 0) {
            $header.addClass('fixed_top');
        } else {
            $header.removeClass('fixed_top');
        }
    });

    // 모바일 메뉴 버튼 클릭 시 메뉴 토글
    $('.menu_btn').click(function () {
        $(this).toggleClass('open');
        $('nav').toggleClass('openmenu');
    });

    // 메뉴 항목 클릭 시 서브메뉴 토글
    $('.menu').click(function () {
        $(this).toggleClass('open');
        $(this).find('.submenu').toggleClass('open');
    });

    // Swiper 설정
    const eventbanner = new Swiper('.eventbanner', {
        loop: true,
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
