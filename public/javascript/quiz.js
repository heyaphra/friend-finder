$('form').submit(function(e){
  e.preventDefault();
  //validate form
  let is_valid = true;
    $('input[type=text]').each(function() {
      if ($(this).val() === "") {
        is_valid = false;
      }
    });
    $('input[type=select]').each(function() {
      if ($(this).val() === "") {
        is_valid = false;
      }
    });
    //end form validation
    
    var form_data = {
        name: $("#fname").val(),
        photo: $("#headshot").val(),
        scores: [
          $("#question1").val(),
          $("#question2").val(),
          $("#question3").val(),
          $("#question4").val(),
          $("#question5").val(),
          $("#question6").val(),
          $("#question7").val(),
          $("#question8").val(),
          $("#question9").val(),
          $("#question10").val()
        ]
      };
    
  $('input[type=submit]').attr('value', 'Loading...').attr('disabled', 'disabled');

  $.post("/api/friends", form_data, function(data, err) {
        if(err) console.log('error')
        return;
        //evaluate and display match here
     });
});

  