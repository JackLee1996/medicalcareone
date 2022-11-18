//contact us form
$(".contact_btn").on('click', function () {
    //disable submit button on click
    // $(".contact_btn").attr("disabled", "disabled");
    $(".contact_btn b").text('Sending');
    output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">Submit Successfully! See you soon!</div>'; 

    //simple validation at client's end
    var post_data, output;
    var proceed = "true";
    // var allBlank;

    var str = $('#contact-form-data').serializeArray();

    $('#contact-form-data input').each(function() {
        if(!$(this).val()){
            // alert('Some fields are empty');
            proceed = "false";
        }
    });

    //everything looks good! proceed...
    if (proceed === "false") {                                                         
            // alert("yes");
            output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';
            $("#result").hide().html(output).slideDown();
            $(".contact_btn i").addClass('d-none');
        
    } else {
        output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">Submit Successfully! See you soon!</div>'; 
        $("#result").hide().html(output).slideDown();
            $(".contact_btn i").addClass('d-none');
    }


});



