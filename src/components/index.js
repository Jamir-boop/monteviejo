import * as $ from "jquery";

$(document).ready(() => {
	$(window).scroll(() => {
		if (window.scrollY > 0) {
			$("header").css("display", "block");
		} else {
			$("header").css("display", "none");
		}
	});

	$(document).on("mousemove", function (e) {
		$(".granos_front").css({
			top: e.pageY * 0.01,
			left: e.pageX * 0.01,
		});
	});
});
