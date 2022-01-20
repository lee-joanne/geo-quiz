let score = document.getElementById("scores");
let startButton = document.getElementById("start");
let choiceButtons = document.getElementsByClassName("choice-btn");
let questionArea = document.getElementsByClassName("question-area");

startButton.addEventListener("click", runGame);

function runGame(levelOne){
 //let homepageContainer = document.getElementsByClassName("game-container")[0];
 // homepageContainer.classList.remove('game-container');

let homepageContainer = document.getElementById("homepage-container");
homepageContainer.classList.add('hide');
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
  options: ["Brazil", "Argentina", "Japan", "Laos"],
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