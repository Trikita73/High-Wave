$(document).ready(function() {

	//JQuery: The script is responsible section portfolio myParallax -->

	$('#portfolio').myParallax({
		"speed" : "25"
	});

	//JQuery: This element is responsible for portfilio img -->

	$("#portfolio_grid").mixItUp();
	$("#directions_grid").mixItUp();

	//JQuery: Portfolio -->

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	//JQuery: Connection MagnificPopup -->

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline"});
	$(".popup_direct").magnificPopup({type:"inline"});

	//JQuery: This code animation in the section About -->

	$(".animation_1").animated("flipInY", "flipOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	//JQuery: This code animation left and right section resume -->

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	//JQuery: Title animation on the header -->

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	//JQuery: This code changes the height of the window (resize Height) -->

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//JQuery: This is code has animation sandvich -->

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");	
	});

	//JQuery: Highlighting the menu -->

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	//JQuery: This code responsible for opening menu and fade -->

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$("top_text").removeClass("h_opacify");
			$(".top_mnu").fadeOut(600); //fadeIn - ефект(скорость)
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$("top_text").addClass("h_opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated")
		};			
	});

	//JQuery: This code is responsible for MagnificPopup at Portfolio -->

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	//JQuery: BootstrapValidation -->

	$("input, select, textarea").jqBootstrapValidation();

	//JQuery: Scroll Menu -->

	$(".top_mnu ul a").mPageScroll2id();

});

//JQuery: He is responsible for the slow scroll and loader -->

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

//JQuery: Scroll Top -->

$('#s_top').hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#s_top').fadeIn();
			} else {
				$('#s_top').fadeOut();
			}
		});
		$("#s_top").click(function () {
			$("body, html").animate({
				scrollTop: 0
			}, 1700);
			return false;
		});
	});
