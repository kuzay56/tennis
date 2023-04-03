var swiper1 = new Swiper(".swiper1", {
	slidesPerView: 6,
	spaceBetween: 50,
	freeMode: true,
	navigation: {
		nextEl: ".arrow__next",
		prevEl: ".arrow__previous",
	},
	keyboard: true,
},);

var swiper2 = new Swiper(".swiper2", {
	spaceBetween: 100,
	navigation: {
		nextEl: ".arrow__next-2",
		prevEl: ".arrow__previous-2",
	},
});
