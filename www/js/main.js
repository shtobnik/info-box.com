$(document).ready(function() {

	/*$body.on('click', '#productItemWrapper [data-add-to-cart]', function() {
		var $this   = $(this);
		var $parent = $('#productItemWrapper');
		var path    = $parent.attr('data-path');

		$flying = $('<div class="inFlying"><span></span></div>').appendTo($parent);

		var $img = $parent.find('img');

		var ajax = $.ajax({
			url:     path,
			timeout: 20000,
			type:    "get",
			data:    null
		});

		ajax.done(function (response) {
			if ($img && $img.length) {
				flyAway($img);
			}

			$cartEmpty.addClass('hidden');

			$cartWrapperPaster.find('.items-wrapper').removeClass('hidden').find('.items').append(response.html);

			$cartWrapperPasterItems.css('max-height', $body.height() - 200 +'px');
			$cartTotalAmount.text(response.totalPrice);

			$cartWrapperPaster.find('.deliverySfree')[(response.freeDelivery ? 'remove' : 'add') +'Class']('hidden');

			$('.cartPicto span').text($cartWrapperPasterItems.children().length);

			$flying.remove();

			$parent.addClass('inCart');
		});

		ajax.error(function () {
			$flying.remove();

			return false;
		});

		return false;
	});*/

});
