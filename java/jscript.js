// Business Logic
function Form(questionOne, questionTwo, questionThree, questionFour) {
  this.questionOne = questionOne;
  this.questionTwo = questionTwo;
  this.questionThree = questionThree;
  this.questionFour = questionFour;
}

//User Interface Logic
var huey = $("#huey")
var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);
