$(function () {
    $('#ad_banner i').on('click', function () {
        $('#ad_banner').slideUp();
    });

    $('.main_slider').slick({
        dots: true,
        arrows: false,
    });

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
})