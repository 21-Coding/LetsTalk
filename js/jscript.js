$(document).ready(function(){
  $("form#formIdentity").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var time = parseInt($("#time").val());
    var season = parseInt($("#season").val());
    var holiday = parseInt($("#holiday").val());
    var car = parseInt($("#car").val());
    var bball = parseInt($("#bball").val());

    var results = time + season + holiday + car + bball ;

    console.log(results);
    if (results >= 8 && results <= 12 ){
      $(".outcome, .ruby").show();
    } else if (results >= 12 && results <= 25){
      $(".outcome, .JS").show();
    } else if (results >= 26){
      $(".outcome, .CSharp").show();
    } else {
      $(".outcome, .none").show();

    }
    $(".text").text(name);

  });
});
