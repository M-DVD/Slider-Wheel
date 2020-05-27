/* ******************************************* */
/*  Simple Slider Wheel                        */
/*  -------------------                        */
/*  Copyright                                  */
/*     Mejias David   -> Info-DVD aka M-DVD    */
/* ******************************************* */
/*  MIT License                                */
/* ******************************************* */

		$(document).ready(function(){
			heightSlide = $("#slide-05").outerHeight(true) / 2;
			heightLastSlide = $("#slide_05").offset().top ;
			$("body").scrollspy({target: '.dvd_fixed_slider', offset: heightSlide });
		});

		$(window).on("scroll", function () {
			var scrollTop = $(window).scrollTop();
			var attrPosition = (scrollTop > heightLastSlide) ? 'static' : 'absolute';
			$("#slide-05").css({ position: attrPosition });
		});

