document.addEventListener('DOMContentLoaded', function() {
	// Event guests slider
	const eventGuestsSliders = [],
		eventGuests = document.querySelectorAll('.event_info .guests .swiper')

	eventGuests.forEach((el, i) => {
		el.classList.add('event_guests_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: ".swiper-pagination",
				type: "fraction",
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			}
		}

		eventGuestsSliders.push(new Swiper('.event_guests_s' + i, options))
	})


	// Event gallery slider
	const eventGallerySliders = [],
		eventGallery = document.querySelectorAll('.event_gallery .swiper')

	eventGallery.forEach((el, i) => {
		el.classList.add('event_gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: ".swiper-pagination",
				type: "fraction",
			},
			lazy: true,
			spaceBetween: 24,
			slidesPerView: 'auto'
		}

		eventGallerySliders.push(new Swiper('.event_gallery_s' + i, options))
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})
})