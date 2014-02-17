$(document).ready(function() {

  $('.js-caseslider').cycle({
		fx: "none",
		manualSpeed: 800,
		timeout: 0,
		log: false,
		allowWrap: false,
		autoHeight: "container",
		hideNonActive: false,
		slideActiveClass: "is-active",
		pagerActiveClass: "is-active",
		disabledClass: "is-disabled",
		slideClass: "case__item",
		pager: ".case__pager",
		slides: ".case__item",
		next: ".case__next",
		pagerTemplate: "<li></li>"
  });

	function detectSlider(){
		if ($(window).width() < 640) {
			$('.case__item').addClass('is-active');
			$('.js-caseslider').cycle('destroy');
			$('.case__slider').removeClass('js-caseslider');
		}
		else{
			$('.case__slider').addClass('js-caseslider');
			$('.js-caseslider').cycle();
		}
	}
	detectSlider();

	var body = $('body');
	var cases = $('.js-caseslider');

	cases.bind('mousewheel', function(event, delta) {


		// alert('ololo');
		if (body.hasClass('is-running')) {
			//alert('i am runnig dont talk to me');
		} else {
			body.addClass('is-running');
			if (delta < 0) {
				// setTimeout('$(".js-caseslider").cycle("next", function( event, opts ) {
				// 	body.removeClass("is-running");
				// })', 100);

				// $(".js-caseslider").on("next", function( event, opts ) {
				// 	body.removeClass("is-running");
				// });
				$('.js-caseslider').cycle('next');
				setTimeout('$("body").removeClass("is-running")', 1500);
			}
		}
		return false;
	});



	$('.navbar').on('click', function() {
		$('.nav').slideToggle('fast');
	});



	function scrollSidenav(){
		$('.company__section').each(function(){
			var pos = $(this).offset().top;
			var id = $(this).attr('id');
			if( $(window).scrollTop() >= (pos - 20)){
				$('.js-sidenav li').removeClass('is-active');
				$('[href = #'+id+']').parent().addClass('is-active');
			}
		});
	}

	$(".js-sidenav a").click(function (){
		var page = $(this).attr("href");
			$('html, body').animate({
				scrollTop: $(page).offset().top - 15
			}, 500);
		return false;
	});

	function fixedSidenav() {
		var top = ($('.company').offset().top - 20);
		var bottom = ($('.company').offset().top - 20);
		var last = ($('.company__section:last').offset().top + 70);
		// var bottom = ($('.company__item:last').offset().top + 170);

		if($(window).scrollTop() > top){
				$(".js-sidenav").addClass('is-fixed');
		}
		if($(window).scrollTop() < bottom){
			$(".js-sidenav").removeClass('is-fixed');
		}
		if($(window).scrollTop() > last){
			$(".js-sidenav").removeClass('is-fixed');
		}

	}


	//masked input
	$(function(){
		$('#inputTel').mask("+7 (999) 999-99-99");
	});

	$(window).resize(function() {
		detectSlider();
	});

	$(window).scroll(function() {
		if ($('.js-sidenav').length) {
			fixedSidenav();
			scrollSidenav();
		}
	});

});