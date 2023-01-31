$(function () {


    // nav bar js ===================

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.navbar').addClass('my_stick_bg');
        } else {
            $('.navbar').removeClass('my_stick_bg');
        }
    });


    // wow js ==========
    new WOW().init();
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

    // banner slick js ==========

    $('.banner_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    // mixitup js in portfolio section =======
    var containerEl = document.querySelector('.port_filter');

    var mixer = mixitup(containerEl);

});



// venubox video s ========

new VenoBox({
    selector: '.my-video-links',
});

// ========== smoth scroll js

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
});

//  slideInLeft" data-wow-duration="2s" data-wow-delay="1s"

//  slideInRight" data-wow-duration="1s" data-wow-delay="1s"