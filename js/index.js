"use strict";

$(document).ready(function () {
	!(function () {
		$(".h-menu__close").on("click", function () {
			$(".h-menu").removeClass("h-menu--active");
			$(".submenu").removeClass("submenu--active");
			$(".h-menu__back").removeClass("h-menu__back--active");
		});
		$(".h-menu__back").on("click", function () {
			$(".submenu").removeClass("submenu--active");
			$(".h-menu__back").removeClass("h-menu__back--active");
		});
		$(".h-menu__link").on("click", function (e) {
			var sub = $(this).parent().find(".submenu"); /// console.log(sub);

			if (sub.length > 0) {
				e.preventDefault();
				sub.addClass("submenu--active");
				$(".h-menu__back").addClass("h-menu__back--active");
			}
		});
		$(".header__menuopen").on("click", function () {
			$(".h-menu").addClass("h-menu--active");
		});
	})();

	var $slider = $(".indx-slider");

	if ($slider.length) {
		var currentSlide;
		var slidesCount;
		var sliderCounter = document.createElement("div");
		sliderCounter.classList.add("slider__counter");
		sliderCounter.classList.add("container");

		var updateSliderCounter = function (slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).text("0" + currentSlide);
		};

		$slider.on("init", function (event, slick) {
			$slider.append(sliderCounter);
			updateSliderCounter(slick);
		});

		$slider.on("afterChange", function (event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

		$slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			dotsClass: "slick-dots container",
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 1000,
		});
	}

	$("ul.tabs__caption").on("click", "li:not(.active)", function () {
		$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.tabs")
			.find("div.tabs__content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
	});

	$(".service-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 551,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 471,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".image-popup").magnificPopup({
		type: "image",
		zoom: {
			enabled: true,
			duration: 300,
		},
	});

	//уход со страницы
	$(".closeForm").click(function (e) {
		$(".exitblock").parent().remove();
	});
	$(document).mouseleave(function (e) {
		if (e.clientY < 10) {
			$(".exitblock")
				.parent()
				.fadeIn({
					start: function () {
						$(this).css("display", "flex");
					},
				});
		}
	});

	$(".m-form button[type=button]").on("click", function (e) {
		e.preventDefault();
		var validate = true;

		console.log(
			$(this).closest(".m-form").find("input[type=checkbox]").is(":checked")
		);

		if (
			$(this).closest(".m-form").find("input[type=checkbox]").is(":checked")
		) {
			$(this).closest(".m-form").find(".c-check").addClass("not_validate");
			validate = false;
		}
		if (validate) {
			$(this).closest(".m-form").find(".hidden-submit").trigger("click");
		}
	});
	$("body").on("click", ".not_validate", function () {
		$(this).removeClass("not_validate");
	});
});
//# sourceMappingURL=index.js.map
