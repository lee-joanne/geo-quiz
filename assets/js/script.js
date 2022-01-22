let score = document.getElementById("scores");
let startButton = document.getElementById("start");
let choiceButtons = document.getElementsByClassName("choice-btn");
let questionArea = document.getElementById("question-area");
let levelOneComplete = document.getElementById("level-one-complete");
let levelTwoComplete = document.getElementById("level-two-complete");
let levelThreeComplete = document.getElementById("level-three-complete");
let submitButton = document.getElementById("submit");
let gameOver = document.getElementById("game-over");
let scores = document.getElementById("scores");
let playAgainButton = document.getElementById("play-again");

document.addEventListener('DOMContentLoaded', function () {
  levelOneComplete.style.display = 'none';
  levelTwoComplete.style.display = 'none';
  levelThreeComplete.style.display = 'none';
  submitButton.style.display = 'none';
  gameOver.style.display = 'none';
  scores.style.display = 'none';
  playAgainButton.style.display = 'none';
});

startButton.addEventListener("click", runGame);


function runGame(levelOne){
let homepageContainer = document.getElementById("homepage-container");
homepageContainer.classList.add('hide');
question

}


let levelOne = {
  question: "What is the capital city of Germany?",
  options: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
  answer: "Berlin",

  question: "Which country has the capital city of Canberra?",
  options: ["New Zealand", "Australia", "Austria", "Slovakia"],
  answer: "Australia",

  question: "Which country has the Eiffel Tower?",
  options: ["Germany", "France", "Portugal", "United Kingdom"],
  answer: "France",

  question: "In which Ukranian city did the 1986 Chernobyl Disaster take place?",
  options: ["Lviv", "Dnipro", "Bakhmut", "Pripyat"],
  answer: "Pripyat",

  question: "How many provinces and territories are there in Canada?",
  options: ["10 provinces 3 territories", "11 provinces 2 territories", "10 provinces 2 territories", "12 provinces 3 territories"],
  answer: "10 provinces 3 territories",

  question: "Which country has the flag with red and white stripes and fifty white stars?",
  options: ["Algeria", "United States of America", "Moldova", "Russia"],
  answer: "United States of America",

  question: "Which of these countries are NOT part of the European Union?",
  options: ["Malta", "Lithuania", "Romania", "Switzerland"],
  answer: "Switzerland",

  question: "Which country has the flag with the meaning 'circle of the sun'?",
  options: ["Brazil", "South Korea", "Japan", "Laos"],
  answer: "Japan",

  question: "Which country has the most timezones?",
  options: ["Russia", "France", "China", "Canada"],
  answer: "France",

  question: "Which city is right on the equator?",
  options: ["Quito", "Cairo", "Kuala Lumpur", "Bangkok"],
  answer: "Quito",
}


/* JavaScript code on modal window and close taken from W3 Schools page on modal windows: https://www.w3schools.com/howto/howto_css_modals.asp */
let modal = document.getElementById("instructions-modal");
let instructionsBtn = document.getElementById("instructions");
let closeButton = document.getElementsByClassName("close")[0];

instructionsBtn.addEventListener("click", function(){
  modal.style.display = "block";
})

closeButton.addEventListener("click", function(){
  modal.style.display = "none";
})

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})