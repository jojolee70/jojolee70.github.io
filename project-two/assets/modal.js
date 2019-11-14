// Button to open a modal
$(document).ready(function (){
    $('#button1_normal').click(function() {
        $("#modal-content_step1_normal").toggleClass("visible");
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#modal-content_step1_normal_close').click(function() {
        $("#modal-content_step1_normal").toggleClass("visible")
        });
});
