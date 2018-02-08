$('form').submit(function(e){
  e.preventDefault();
  //validate form
  let is_text_valid = true;
  let is_select_valid = true;
    $('input[type=text]').each(function() {
      if ($(this).val() === "") {
        is_text_valid = false;
        $(this).prev().css('color', 'red');
      } else {
        is_text_valid = true;
        $(this).prev().css('color', 'white');
      }
    });
    $('select option:selected').each(function() {
      if ($(this).text() === "-") {
        is_select_valid = false;
       $(this).parent().css('border-color', 'red');
     } else {
       is_select_valid = true;
        $(this).parent().css('border-color', 'black');
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
      
  
  if(is_text_valid && is_select_valid){
  $('input[type=submit]').attr('value', 'Loading...').attr('disabled', 'disabled');
  $.post("/api/friends", form_data, function(data, err) {
        $('form').html(`
          <h3>It's a match!</h3>
          <p id='match-msg'>You matched with ${data.name}!</p>
          <img src='${data.photo}' class='match-img'/>
        `);
        
     });
     
   } else {
   //  
     alert('Oops! Please make sure you answer all the questions and enter a valid name and image URL.')
   }
});

  