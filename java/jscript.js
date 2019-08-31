// Business Logic
function myResults(sum) {

  if (sum >= 16 && sum <= 20) {
    $('#sharp').show();
  } else if (sum >= 11 && sum <= 15) {
    $('#ruby').show();
  } else if (sum >= 6 && sum <= 10) {
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

    var tvshow = parseInt($('input:option[name=tvshow]:checked').val());
    var leo = parseInt($('input:option[name=leo]:checked').val());
    var pdx = parseInt($('input:option[name=pdx]:checked').val());
    var learn = parseInt($('input:option[name=learn]:checked').val());
    var total = tvshow + leo + pdx + learn ;



    $('#sumpullsfrom').hide();

      myResults(total);



});
});
