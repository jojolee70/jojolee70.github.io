// Button to open a modal
$(document).ready(function () {
	$('#a-button').click(function () {
		$(".contrast_modalcontent").toggleClass("invisible");
		$(".grey_background").toggleClass("invisible");
	});
});

// Button to close a modal
$(document).ready(function () {
	$('#contrast-close').click(function () {
		$(".contrast_modalcontent").toggleClass("invisible");
		$(".grey_background").toggleClass("invisible");
	});

});

// Button to open a modal
$(document).ready(function () {
	$('#b-button').click(function () {
		$(".gradient_modalcontent").toggleClass("invisible");
		$(".grey_background").toggleClass("invisible");
	});
});

// Button to close a modal
$(document).ready(function () {
	$('#gradient-close').click(function () {
		$(".gradient_modalcontent").toggleClass("invisible");
		$(".grey_background").toggleClass("invisible");
	});

});

// Button to open a modal
$(document).ready(function () {
	$('#c-button').click(function () {
		$(".ratio_modalcontent").toggleClass("invisible");
		$(".grey_background").toggleClass("invisible");
	});
});

// Button to close a modal
$(document).ready(function () {
	$('#ratio-close').click(function () {
		$(".ratio_modalcontent").toggleClass("invisible");
		$(".grey_background").toggleClass("invisible");
	});

});
