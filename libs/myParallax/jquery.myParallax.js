(function($) {

	$.fn.myParallax = function( options ) {

		var settings = $.extend({
			"speed" : "150"
		}, options);

		return this.each(function() {

			var ths = $(this);

			ths
			.css({
				"min-height" : "400px",
				"position" : "relative",
				"overflow" : "hidden"
			})
			.wrapInner("<div class='parallax-content' style='position:relative;z-index:1'>")
			.prepend("<div class='image-parallax' style='background-image:url(" + ths.data('parallax-image') + ");background-size:cover;background-position:top;position:absolute;top:0;width:100%'>");

			function parallaxInit() {

				var pheight  = ths.height();

				ths.children(".image-parallax").css({
					"height" : pheight*2,
					"top" : -pheight
				});

				var st = $(document).scrollTop();
				var sp = ths.offset().top - $(window).height();
				var ob = ths.offset().top + pheight;
				var sr = st-sp;

				if(st >= sp && st <= ob) {

					ths.children(".image-parallax").css({
						"transform" : "translate3d(0px, " + sr /settings.speed + "%, 0px)",
						"-webkit-transform" : "translate3d(0px, " + sr /settings.speed + "%, 0px)"
					});

				};

			};

			$(window).scroll(function() {
				parallaxInit();
			}).load(function() {
				parallaxInit();
			});
			$("*").resize(function() {
				parallaxInit();
			});

		});

	};

})(jQuery);