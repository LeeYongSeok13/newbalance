$(function () {
    $('#ad_banner i').on('click', function () {
        $('#ad_banner').slideUp();
    });

    $('.main_slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('#main_visual .angle i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual .angle i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext');
    })

    $('#model_information .controls i:nth-child(1)').on('click', function () {
        $('.iu').trigger('pause');
    });
    $('#model_information .controls i:nth-child(2)').on('click', function () {
        $('.iu').trigger('play');
    })

    $('.shirt_slider').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });

    $('.xi-arrow-left').on('click', function () {
        $('.shirt_slider').slick('slickPrev');
    });
    $('.xi-arrow-right').on('click', function () {
        $('.shirt_slider').slick('slickNext');
    });

    $('.tab_menu figure').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');
    });
})