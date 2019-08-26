$(document).ready(function() {
  $("form#language-Form").submit(function(event) {
    var age = parseInt($("input#age").val());
    var freetime = $("select#freetime").val();
    var hunger = $("select#hunger").val();
    var name = $("select#name").val();


    var quote = "is "
    if (gender === 'male' && age < 26 && eyeColor === 'Brown') {
      quote += 'Sting';
    }
    if (gender === 'female' && age > 26 && eyeColor === 'Green') {
      quote += 'Brittany Spears';
    }

    $("#rate").text(quote);
    $("#quote").show()

    event.preventDefault();
  });
});
