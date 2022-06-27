(function($) {
	'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

	//Navbar JS
    $(window).on('scroll',function() {
        if ($(this).scrollTop()>150){  
            $('.navbar-area').addClass("sticky-top");
        }
        else{
            $('.navbar-area').removeClass("sticky-top");
        }
    });

    // Search Bar
    $('.search-icon').on('click',function(){
        $('.search-form').toggle();
    });

    // Testimonial Slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        smartSpeed: 2000,
        dots: false,
    });

    // Showcase Portfolio
    $('#Container').mixItUp();

    // Accordian JS
    $(".faq-area .open").on('click',function () {
        var container = $(this).parents(".topic");
        var answer = container.find(".answer");
        var trigger = container.find(".faq-t");
        answer.slideToggle(200);
        if (trigger.hasClass("faq-o")) {
            trigger.removeClass("faq-o");
        }
        else {
            trigger.addClass("faq-o");
        }
        if (container.hasClass("expanded")) {
            container.removeClass("expanded");
        }
        else {
            container.addClass("expanded");
        }
    });

    // Video JS 
    $('.popup-vimeo').magnificPopup({
		disableOn:320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
    });
    
    // Popup Gallery
    $('.popup-gallery').magnificPopup({
		type: 'image',
	});
	
})(jQuery);