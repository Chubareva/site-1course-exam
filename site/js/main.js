/* jQuery */

(function ($) {
	$(document).ready(function () {

		if ($('#back-to-top').length) {
			var scrollTrigger = 100, // px
				backToTop = function () {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('#back-to-top').addClass('show');
					} else {
						$('#back-to-top').removeClass('show');
					}
				};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
			$('#back-to-top').on('click', function (e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			});
		}
		$(".tr-offcanvas-menu").mmenu();
		var API = $(".tr-offcanvas-menu").data("mmenu");

		$(".offcanvas-menu-button").click(function () {
			API.open();
		});
		$(".menu-items li a").click(function () {
			API.close();
		});



	});
})(jQuery);
