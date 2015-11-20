$(window).load(function () {
    $('.spinner').fadeOut();
    $('.preloader').delay(1000).fadeOut('slow');
});

$(document).ready(function () {
    $('.navbar').Stickyfill();

    $('.arrow').click(function(event) {
        event.preventDefault();
        TweenLite.to(window, 2, {scrollTo:{y: $('nav').offset().top, autoKill: true}, ease:Power2.easeOut});
    });

    var lastScroll = false;

    $(window).scroll(function(event) {
        if ($(this).scrollTop() > 0 && lastScroll == false) {
            event.preventDefault();
            TweenLite.to(window, 2, {scrollTo:{y: $('nav').offset().top, autoKill: true}, ease:Power2.easeOut});
            lastScroll = true;
        }
    });

    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();
    tl.from($('.darker'), 0, {backgroundColor: "rgba(0, 0, 0, 0.4)"});
    tl.to($('.darker'), 2.5, {backgroundColor: "rgba(0, 0, 0, 0.9)", ease: Power2.easeInOut, y: 0});

    var scene = new ScrollMagic.Scene({triggerElement: "header", duration: "100%"})
        .setTween(tl)
        .triggerHook(0)
        .addTo(controller);

    var slides = $('.slide');
    var currentSlide = 0;

    TweenLite.set(slides.filter(":gt(0)"), { autoAlpha: 0 });
    TweenLite.delayedCall(10, nextSlide);

    function nextSlide()
    {
        TweenLite.to(slides.eq(currentSlide), 2, { autoAlpha:0 });
        currentSlide = ++currentSlide % slides.length;
        TweenLite.to(slides.eq(currentSlide), 2, { autoAlpha:1 });

        TweenLite.delayedCall(10, nextSlide);
    }
});
