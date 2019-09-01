// Business Logic
function myResults(sum) {

if (tvshow === "")




//User Interface Logic

$(document).ready(function () {
  $('#sumpullsfrom').submit(function (event) {
    event.preventDefault();

    var tvshow = parseInt($('input:select[name=tvshow]:checked').val());
    var leo = parseInt($('input:select[name=leo]:checked').val());
    var pdx = parseInt($('input:select[name=pdx]:checked').val());
    var learn = parseInt($('input:select[name=learn]:checked').val());
    var total = tvshow + leo + pdx + learn ;



    $('#sumpullsfrom').hide();

      myResults(total);

    $('#hideme').show();

});
});
