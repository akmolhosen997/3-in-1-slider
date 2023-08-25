(function ($) {
"use strict";





// artza hero-2
let slider_thumb = new Swiper('.slider-3', {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 4,
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: false,		
	breakpoints: {
		320: {
			slidesPerView: 4,
		},
		576: {
			slidesPerView: 4,

		},
		768: {
			slidesPerView: 4,

		},
		993: {
			slidesPerView: 4,
		},
	}
});


let slider3 = new Swiper('.slider-1 ', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 2,
	// effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: slider_thumb,
	},

    navigation: {
		nextEl: "next-btn",
		prevEl: ".prev-btn",
	},
});

let slider4 = new Swiper('.slider-2 ', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 2,
	// effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: slider_thumb,
	},

    navigation: {
		nextEl: "next-btn",
		prevEl: ".prev-btn",
	},
});




})(jQuery);