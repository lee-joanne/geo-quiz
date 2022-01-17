let quizContainer = document.getElementById("question-area");
let nextQuestion = document.getElementById("next-question");
let submitQuiz = document.getElementById("submit");
let levelOneDone = document.getElementById("level-one-complete");
let levelTwoDone = document.getElementById("level-two-complete");
let levelThreeDone = document.getElementById("level-three-complete");
let gameOver = document.getElementById("game-over");
let score = document.getElementById("scores");
let start = document.getElementById("start");
let buttons = document.getElementsByClassName("btn");

/*
for (let i = 0; i < buttons.length; i++){

}
*/

start.addEventListener("click", runGame);

function runGame() {
  
}

function levelComplete(){

}

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