$(document).ready(function() {


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


	$('.navbar').on('click', function() {
		$('.nav').slideToggle('fast');
	});

	$('.js-caseslider').cycle();

	$(".js-sidenav a").click(function (){
		var page = $(this).attr("href");
			$('html, body').animate({
				scrollTop: $(page).offset().top - 15
			}, 500);
		return false;
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


	$(".js-scroll a").click(function (){
		var page = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 500);
		return false;
	});


	$(".js-next").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 500);
		return false;
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