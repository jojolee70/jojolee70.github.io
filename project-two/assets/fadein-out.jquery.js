$(document).ready(function () {
	//ID or Class name of the button goes into the first section
	$('#blue-circle').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#bluepaint").toggleClass("invisible");
		$(".blue-opt2").toggleClass("invisible");
		$("#yellow-circle").toggleClass("invisible");
		$("#red-circle").toggleClass("invisible");
		$("#blue-circle").toggleClass("active");
		$("#yellow-green").removeClass("active");
		$("#blue-green").removeClass("active");
		$("#red-purple").removeClass("active");
		$("#purplepaint").addClass("invisible");
		$("#greenpaint").addClass("invisible");
	});



	$('#red-circle').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#redpaint").toggleClass("invisible");
		$(".red-opt2").toggleClass("invisible");
		$("#blue-circle").toggleClass("invisible");
		$("#yellow-circle").toggleClass("invisible");
		$("#red-circle").toggleClass("active");
		$("#purplepaint").addClass("invisible");
		$("#bluepaint").addClass("invisible");
		$("#orangepaint").addClass("invisible");
		$("#yellow-orange").removeClass("active");
		$("#blue-purple").removeClass("active");



	});
	$('#yellow-circle').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#yellowpaint").toggleClass("invisible");
		$(".yellow-opt2").toggleClass("invisible");
		$("#blue-circle").toggleClass("invisible");
		$("#red-circle").toggleClass("invisible");
		$("#yellow-circle").toggleClass("active");
		$("#red-purple").removeClass("active");
		$("#purplepaint").addClass("invisible");
		$("#bluepaint").addClass("invisible");
		$("#greenpaint").addClass("invisible");
		$("#yellow-green").removeClass("active");


	});
	$('#red-purple').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#purplepaint").removeClass("invisible");
		$("#red-circle").toggleClass("active");
		$("#red-purple").addClass("active");
		$("#yellow-green").removeClass("active");
		$("#greenpaint").addClass("invisible");
		$("#bluepaint").addClass("invisible");

	});
	$('#blue-purple').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#purplepaint").removeClass("invisible");
		$("#blue-purple").addClass("active");
		$("#blue-circle").toggleClass("active");
		$("#yellow-orange").removeClass("active");
		$("#orangepaint").addClass("invisible");
		$("#greenpaint").addClass("invisible");
		$("#yellow-circle").addClass("active");
		

	});
	$('#red-orange').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#orangepaint").removeClass("invisible");
		$("#yellow-orange").addClass("active");
		$("#greenpaint").addClass("invisible");
		$("#yellow-circle").toggleClass("active");
		$("#red-orange").addClass("active");
		$("#greenpaint").addClass("invisible");
		$("#bluepaint").addClass("invisible");
	});
	$('#yellow-orange').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#orangepaint").removeClass("invisible");
		$("#yellow-orange").addClass("active");
		$("#red-orange").addClass("active");
		$("#red-purple").removeClass("active");
		$("#purplepaint").addClass("invisible");
		$("#greenpaint").addClass("invisible");
		$("#bluepaint").addClass("invisible");
	});
	$('#yellow-green').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#greenpaint").removeClass("invisible");
		$("#red-purple").addClass("active");
		$("#yellow-green").removeClass("active");
		$("#purplepaint").addClass("invisible");
		$("#orangepaint").addClass("invisible");
		$("#bluepaint").removeClass("invisible");
	});
	$('#blue-green').click(function () {
		//ID or Class name of the modal you want to appear on click goes into this second area.
		$("#greenpaint").removeClass("invisible");
		$("#red-purple").removeClass("active");
		$("#purplepaint").addClass("invisible");
		$("#orangepaint").addClass("invisible");
		$("#bluepaint").removeClass("invisible");
	});
});
