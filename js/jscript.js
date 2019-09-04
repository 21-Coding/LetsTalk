$(document).ready(function(){
  $("form#formIdentity").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var time = parseInt($("#time").val());
    var season = parseInt($("#season").val());
    var holiday = parseInt($("#holiday").val());

    var results = time + season + holiday;

    console.log(results);
    if (results > 0 && results <= 6 ){
      $(".ruby").show();
      $(".JS, .CSharp, .none").hide();
    } else if (results >= 7 && results <= 12){
      $(".JS").show();
      $(".CSharp, .ruby, .none").hide();

    } else if (results > 12){
      $(".CSharp").show();
      $(".ruby, .none, .JS").hide();

    } else {
      $(".none").show();
      $(".CSharp, .ruby, .JS").hide();
    }

   $(".text").text(name);

 });
});
