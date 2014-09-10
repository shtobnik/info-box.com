$(window).load(function() {

	$('#slider').carouFredSel({

		auto: false,

		prev: '#prev',

		next: '#next',

		swipe: {

			onMouse: true

		}
	});


	$('.note').removeAttr('style');


	$('[name="details"]').each(function() {

		$(this).on("click", function() {

			var this_ = $(this),

				par = this_.parent(".slider-l-i-content");
				
				if( this_.hasClass('show-text') ){
					
					this_.removeClass('show-text');

					this_.prev().animate({

						height: 24

					}, 700);

					this_.text('show details');

					setTimeout(function() {
						
						par.prev().animate({

							height: 200,

							opacity: 1

						}, 700);

						this_.prev().removeAttr('style');

					}, 710);

				}else {

					this_.prev().addClass('show');

					var height = $(this).prev().height();

					this_.prev().removeClass('show');

					par.prev().animate({

						height: 0,

						opacity: 0

					}, 700);


					setTimeout(function() {

						this_.text('hide details');

						this_.addClass('show-text');

						this_.prev().animate({

							height: height+5

						}, 500);

						$('.slider-b').animate({

							height: height+145

						}, 400);

						$('.list-wrap').animate({

							height: height+80

						});

						$('.caroufredsel_wrapper').animate({

							height: height+80

						});

					}, 700);

				}
			return false;

		});

		$('.btn').on('click', function() {

			var attr = $('.slider-b').attr('style');

			if (typeof attr !== typeof undefined && attr !== false) {

				setTimeout(function() {

					$('.slider-b').removeAttr('style');

					$('.note').removeAttr('style');

					$('.list-wrap').removeAttr('style');

					$('.slider-l-i img').removeAttr('style');

					$('.show-text').text('show details');

					$('.show-text').removeClass('show-text');

				}, 500);


			}

		});

	});
});
