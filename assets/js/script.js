let score = document.getElementById("scores");
let start = document.getElementById("start");
let buttons = document.getElementsByClassName("choice-btn");

document.addEventListener("DOMContentLoaded", function() {
  start.addEventListener("click", runGame);
});

function runGame(levelOne){
  let questionArea = document.getElementById("question-area");
}

//let levelOne = 

//research syntax for nested arrays

/* JavaScript code on modal window and close taken from W3 Schools page on modal windows: https://www.w3schools.com/howto/howto_css_modals.asp */
let modal = document.getElementById("instructions-modal");
let btn = document.getElementById("instructions");
let closeButton = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}