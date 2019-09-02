$(document).ready(function(){
  $("form#assess").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var time = parseInt($("#time").val());
    var season = parseInt($("#season").val());
    var holiday = parseInt($("#holiday").val());

    var results = time + season + holiday;


    if (results < 2){
      $("")
    } )

  })
})
