$(document).ready(function() {

	$(".sidenav a").click(function (){
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
				$('.sidenav li').removeClass('is-active');
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
				$(".sidenav").addClass('is-fixed');
		}
		if($(window).scrollTop() < bottom){
			$(".sidenav").removeClass('is-fixed');
		}
		if($(window).scrollTop() > last){
			$(".sidenav").removeClass('is-fixed');
		}

	}

	//masked input
	$(function(){
		$('#inputTel').mask("+7 (999) 999-99-99");
	});


	$(".js-scroll a").click(function (){
		var page = $(this).attr('href');

		// $('.js-scroll li').removeClass('is-active');
		// $(this).parent().removeClass('is-active');
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 500);
		return false;
	});

	function caseHeight() {
		var el_height = $('body').height();
		var topper_height = $('.topper').height();

		$(".case__item").css("height", el_height - topper_height);
		//$(".case__item:first").css('padding-top',  topper_height);
		//$(".case__item:first").css("height", el_height - topper_height);
		//$(".case__item:last").css("height", "auto");
	} caseHeight();

	function scrollPager(){
		$('.case__item').each(function(){
			var pos = $(this).offset().top;
			var id = $(this).attr('id');
			if( $(window).scrollTop() >= (pos - 200)){
				$('.js-scroll li').removeClass('is-active');
				//$('.case__item').removeClass('is-active');
				$('.case__item').removeClass('is-animate');
				$(this).addClass('is-animate');
				$('[href = #'+id+']').parent().addClass('is-active');
			}
		});
	}


	function scrollCase() {
		var top = ($('.case').offset().top - 200);
		var bottom = ($('.case__item:last').offset().top + 170);

		if($(window).scrollTop() > top){
				$(".case__pager").addClass('is-visible');
		}
		if($(window).scrollTop() > bottom){
			$(".case__pager:last").removeClass('is-visible');
		}

	}

	if ($('.case').length) {

		scrollCase();

	}

	$(".js-next").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 500);
		return false;
	});

	$(window).resize(function() {
		caseHeight();
	});

	$(window).load(function() {
		if ($('.case').length) {
			$('.case__item:first').addClass('is-animate');
		}
	});

	$(window).scroll(function() {
		if ($('.sidenav').length) {
			fixedSidenav();
			scrollSidenav();
		}
		if ($('.case').length) {
			scrollPager();
			scrollCase();
		}
	});

});