$(document).ready(function(event) {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var life1Input = $("input#life1").val();
    var eat1Input= $("input#eat1").val();
    var dreamsInput = $("input#dreams").val();
    var habitsInput = $("input#habits").val();
    var seeInput = $("input#see").val();

    $(".person1").text(person1Input);
    $(".life1").text(life1Input);
    $(".eat1").text(eat1Input);
    $(".dreams").text(dreamsInput);
    $(".habits").text(habitsInput);
    $(".see").text(seeInput);

    $("#story").show();

    event.preventDefault();

  });
});


$(document).ready(function() {
  $("button#Ja").click(function() {
    $("body").removeClass();
    $("body").addClass("script");
  });

  $("button#Ru").click(function() {
    $("body").removeClass();
    $("body").addClass("ruby");
  });

  $("button#C").click(function() {
    $("body").removeClass();
    $("body").addClass("sharp");
  });
});


$(document).ready(function() {
  $("p").click(function() {
    $(".gone").toggle().slideDown();

  });
});
