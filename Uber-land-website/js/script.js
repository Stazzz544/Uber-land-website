// var appendNumber = 4;
// var prependNumber = 1;
// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 3,
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
// 	 el: '.swiper-pagination',
// 	 clickable: true,
//   },
//   navigation: {
// 	 nextEl: '.swiper-button-next',
// 	 prevEl: '.swiper-button-prev',
//   },
// });
// document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.prependSlide([
// 	 '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
// 	 '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
//   ]);
// });
// document.querySelector('.prepend-slide').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
// });
// document.querySelector('.append-slide').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
// });
// document.querySelector('.append-2-slides').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.appendSlide([
// 	 '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
// 	 '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
//   ]);
// });


// //инициализируем WOW js
// new WOW().init();

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
		'@0.00': {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		'@0.75': {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		'@1.00': {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		'@1.50': {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	}
});


var swiper = new Swiper('.swiper-bottom', {
	loop: true,
	freeMode: true,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});








 	// jQuery Табы
$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

//Read more script
jQuery(document).ready(function($){
	$('.section-blog__content_toggle').click(function(event){
		event.preventDefault();

		const $link= $(event.target);
		const $content = $link.prev('div.section-blog__content_block');

		$content.toggleClass('hide');

		const htmlLink  = $content.hasClass('hide') ? 'Read more' :  'Hide'; 
		$link.html(htmlLink);  
	});               
});


//burger
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

