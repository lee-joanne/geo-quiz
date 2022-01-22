let levelOneIndex = 0;
//let levelTwoIndex = 0;
//let levelThreeIndex = 0;

let score = document.getElementById("scores");
let startButton = document.getElementById("start");
let choiceButtons = document.getElementsByClassName("choice-btn");
let questionArea = document.getElementById("question-area");
let levelOneComplete = document.getElementById("level-one-complete");
let levelTwoComplete = document.getElementById("level-two-complete");
let levelThreeComplete = document.getElementById("level-three-complete");
let nextLevel = document.getElementById("next-level");
let gameOver = document.getElementById("game-over");
let scores = document.getElementById("scores");
let playAgainButton = document.getElementById("play-again");
let questionText = document.getElementById("question-text");
let nextQuestion = document.getElementById("next-question");

startButton.addEventListener("click", runLevelOne);

function runLevelOne(){
//shufflequestions();
  let homepageContainer = document.getElementById("homepage-container");
  homepageContainer.classList.add('hide');
  questionArea.classList.remove('hide');
  scores.classList.remove('hide');
  // step 1: pull up the first question
  let currentQuestion = levelOne[0];
  console.table(currentQuestion);

  // step 2: display question
  questionText.textContent = currentQuestion.question;

  function checkAnswer(e){
    nextQuestion.classList.remove('hide');
    if (e.target.getAttribute('data-type') === currentQuestion.answer) {
      alert("Good job! You got it right :)");
    } else {
      alert(`Sorry :( The answer was ${currentQuestion.answer}`);
    }
  }
  //boolean

  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].textContent = currentQuestion.options[i];
    choiceButtons[i].setAttribute("data-type", currentQuestion.options[i]);
    choiceButtons[i].addEventListener("click", checkAnswer);
  }
}


  //choiceButtons.textContent = currentQuestion.options;



  // step 3: select the button that you think is the answer
  // step 4: click "submit"
  // step 4.25: check answer 
  // step 4.5: an alert at the top to validate whether answer is correct or not, with correct answer.
  // steo 5: move onto the next question
  // step 6: score updates


let levelOne = [
  { 
    question: "What is the capital city of Germany?",
    options: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    answer: "Berlin",
  },

  {
    question: "Which country has the capital city of Canberra?",
    options: ["New Zealand", "Australia", "Austria", "Slovakia"],
    answer: "Australia",
  },

  { 
    question: "Which country has the Eiffel Tower?",
    options: ["Germany", "France", "Portugal", "United Kingdom"],
    answer: "France",
  },

  {
    question: "In which Ukranian city did the 1986 Chernobyl Disaster take place?",
    options: ["Lviv", "Dnipro", "Bakhmut", "Pripyat"],
    answer: "Pripyat",
  },

  {
    question: "How many provinces and territories are there in Canada?",
    options: ["10 provinces 3 territories", "11 provinces 2 territories", "10 provinces 2 territories", "12 provinces 3 territories"],
    answer: "10 provinces 3 territories",
  },

  {
    question: "Which country has the flag with red and white stripes and fifty white stars?",
    options: ["Algeria", "United States of America", "Moldova", "Russia"],
    answer: "United States of America",
  },

  {
    question: "Which of these countries are NOT part of the European Union?",
    options: ["Malta", "Lithuania", "Romania", "Switzerland"],
    answer: "Switzerland",
  },

  {
    question: "Which country has the flag with the meaning 'circle of the sun'?",
    options: ["Brazil", "South Korea", "Japan", "Laos"],
    answer: "Japan",
  },

  {
    question: "Which country has the most timezones?",
    options: ["Russia", "France", "China", "Canada"],
    answer: "France",
  },

  {
    question: "Which city is right on the equator?",
    options: ["Quito", "Cairo", "Kuala Lumpur", "Bangkok"],
    answer: "Quito",
  },
]


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