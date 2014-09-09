$(window).load(function() {
	$('#slider').carouFredSel({

		auto: false,

		prev: '#prev',

		next: '#next',

		swipe: {

			onMouse: true

		}
	});



	$('[name="details"]').each(function() {
		$(this).on("click", function() {

			var par = $(this).parent(".slider-l-i-content");
				var this_ = $(this) 
				this_.prev().addClass('show');
				var height = $(this).prev().height();
				this_.prev().removeClass('show');
				console.log(height);

				par.prev().animate({

					height: 0,

					opacity: 0,

				}, 1000);


			setTimeout(function() {

				par.prev().hide();

				this_.prev().animate({

					height: height+5

				}, 500);

			}, 1000);


			return false;

		});
	});
});
