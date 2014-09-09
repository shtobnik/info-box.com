$(document).ready(function() {
	$('#slider').carouFredSel({
		auto: false,
		prev: '#prev',
		next: '#next',
		pagination: "#paginator",
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}
	});
});
