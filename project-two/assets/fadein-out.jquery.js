$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#blue-circle').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#bluepaint").toggleClass("invisible");
    $(".blue-opt2").toggleClass("invisible");
    $("#blue-circle").toggleClass("active");

    $("#yellow-circle").toggleClass("invisible");
    $("#red-circle").toggleClass("invisible");

    $("#blue-yellow").removeClass("active");
    $("#blue-red").removeClass("active");
    $("#purplepaint").addClass("invisible");
    $("#greenpaint").addClass("invisible");
  });



	  $('#red-circle').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#redpaint").toggleClass("invisible");
    $(".red-opt2").toggleClass("invisible");
    $("#red-circle").toggleClass("active");

    $("#blue-circle").toggleClass("invisible");
    $("#yellow-circle").toggleClass("invisible");

    $("#red-yellow").removeClass("active");
    $("#red-blue").removeClass("active");
    $("#purplepaint").addClass("invisible");
    $("#orangepaint").addClass("invisible");
    // $("#bluepaint").addClass("invisible");

  });
	
 $('#yellow-circle').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#yellowpaint").toggleClass("invisible");
    $(".yellow-opt2").toggleClass("invisible");
    $("#yellow-circle").toggleClass("active");

    $("#blue-circle").toggleClass("invisible");
    $("#red-circle").toggleClass("invisible");

    $("#yellow-red").removeClass("active");
    $("#yellow-blue").removeClass("active");
    $("#greenpaint").addClass("invisible");
    $("#orangepaint").addClass("invisible");
    // $("#purplepaint").addClass("invisible");
    // $("#bluepaint").addClass("invisible");
	 
  });
	
	 // the two colors that are turned on when the user clicks the BLUE circle as soon as they arrive on the site
  $('#blue-red').click(function() {
    $("#purplepaint").removeClass("invisible");
    $("#blue-red").addClass("active");

    $("#greenpaint").addClass("invisible");
    $("#blue-yellow").removeClass("active");
  });

  $('#blue-yellow').click(function() {
    $("#greenpaint").removeClass("invisible");
    $("#blue-yellow").addClass("active");

    $("#purplepaint").addClass("invisible");
    $("#blue-red").removeClass("active");
  });

  // the two colors that are turned on when the user clicks the RED circle as soon as they arrive on the site
  $('#red-blue').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#purplepaint").removeClass("invisible");
    $("#red-blue").addClass("active");

    $("#orangepaint").addClass("invisible");
    $("#red-yellow").removeClass("active");
  });

  $('#red-yellow').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#orangepaint").removeClass("invisible");
    $("#red-yellow").addClass("active");

    $("#purplepaint").addClass("invisible");
    $("#red-blue").removeClass("active");
  });



// the two colors that are turned on when the user clicks the YELLOW circle as soon as they arrive on the site
  $('#yellow-red').click(function() {

    $("#orangepaint").removeClass("invisible");
    $("#yellow-red").addClass("active");

    $("#greenpaint").addClass("invisible");
    $("#yellow-blue").removeClass("active");
  });

  $('#yellow-blue').click(function() {
    
    $("#greenpaint").removeClass("invisible");
    $("#yellow-blue").addClass("active");

    $("#orangepaint").addClass("invisible");
    $("#yellow-red").removeClass("active");
  });
});
