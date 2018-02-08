
$('.expand').on('click', function() {
  let identifier = $(this).attr('data-for'); //Gathers the parent div's ID
  let elements = $(this).attr('select-elements');
  console.log(elements);
  if ($(this).text() === '+') {
    $(this).text('-');
    $('#' + identifier).find(elements).show(1500); //Finds the nested element and shows it
  } else if ($(this).text() === '-') {
    $(this).text('+');
    $('#' + identifier).find(elements).hide(1500); //Finds the nested element and hides it
  }
});