var LIST_METHOD ={
 
		handlerData:function(resJSON){
 
			var templateSource   = $("#list-template").html(),
 
				template = Handlebars.compile(templateSource),
 
				listHTML = template(resJSON);
 
		   $('#slider').html(listHTML);
			 
		},
		loadlistData : function(){
 
			$.ajax({
				url:"/src/info_box.json",
				method:'get',
				success:this.handlerData
 
			})
		}
};
 



$(window).load(function() {

	LIST_METHOD.loadlistData();

	setTimeout(function() {

		$('#slider').carouFredSel({

			auto: false,

			prev: '#prev',

			next: '#next',

			swipe: {

				onMouse: true

			}
		});


		var note = $('.note'),
			list_wrap = $('.list-wrap'),
			slider_b = $('.slider-b'),
			caroufredsel_wrapper = $('.caroufredsel_wrapper');


		note.removeAttr('style');


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

							list_wrap.removeAttr('style');

							slider_b.removeAttr('style');

							caroufredsel_wrapper.animate({

								height: '280px'

							});

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

							slider_b.animate({

								height: height+145

							}, 400);

							list_wrap.animate({

								height: height+82

							});

							caroufredsel_wrapper.animate({

								height: height+80

							});

						}, 700);

					}
				return false;

			});

			$('.btn').on('click', function() {

				var attr = slider_b.attr('style');

				if (typeof attr !== typeof undefined && attr !== false) {

					var show_text = $('.show-text');

					setTimeout(function() {

						$('.slider-b, .note, .list-wrap, .slider-l-i img').removeAttr('style');

						show_text.text('show details').removeClass('show-text');

					}, 500);


				}

			});

		});
		
	}, 100);


});
