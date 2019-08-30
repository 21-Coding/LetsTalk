// Business Logic
function myResults(score) {

  if (score >= 40 && score <= 20) {
    $('#sharp').show();
  } else if (score >= 30 && score <= 35) {
    $('#ruby').show();
  } else if (score >= 10 && score <= 20) {
    $('#JS').show();
  } else {
    $('#sharp').show();
    $('#ruby').show();
    $('#JS').show();
  }
}



//User Interface Logic

$(document).ready(function () {
  $('#sumpullsfrom').submit(function (event) {
    event.preventDefault();

    var tvshow = parseInt($('input:radio[name=tvshow]:checked').val());
    var leo = parseInt($('input:radio[name=leo]:checked').val());
    var pdx = parseInt($('input:radio[name=pdx]:checked').val());
    var learn = parseInt($('input:radio[name=learn]:checked').val());
    var total = tvshow + leo + pdx + learn ;



    $('#sumpullsfrom').hide();

myResults(total);
    $('#hideme').show()
});
});
