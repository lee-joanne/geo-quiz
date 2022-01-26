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

startButton.addEventListener("click", runLevelOne);
let currentQuestion = {};

// This code on creating random numbers for the quiz to shuffle is mostly taken from Stack Overflow: https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
var nums = [0,1,2,3,4,5,6,7,8,9],
ranNums = [],
i = nums.length,
j = 0;

while (i--) {
j = Math.floor(Math.random() * (i+1));
ranNums.push(nums[j]);
nums.splice(j,1);
}

let x = 1;
let currentQuestionIndex = ranNums[0];

/**
 * When startButton is clicked, runLevelOne function will execute which will call showGameBoard function
 * and showNextQuestion function.
 */
function runLevelOne(){
  showGameBoard();
  showQuestion();
};

/**
 * The homepage div and contents will hide and question area will appear
 */
function showGameBoard(){
  let homepageContainer = document.getElementById("homepage-container");
  homepageContainer.classList.add('hide');
  questionArea.classList.remove('hide');
  scores.classList.remove('hide');
};

/**
 * The game will loop through the questions in the question array and the choices will iterate
 * through the multiple choice buttons. 
 */
function showQuestion(){
  nextQuestion.classList.add('hide');
  currentQuestion = levelOne[ currentQuestionIndex ];
  questionText.textContent = currentQuestion.question;
  
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].textContent = currentQuestion.options[i];
    choiceButtons[i].setAttribute("data-type", currentQuestion.options[i]);
    choiceButtons[i].addEventListener("click", checkAnswer);
  }
}

/**
 * The score for the game will increment each time the user gets a correct answer
 */
function incrementScore(){
  let previousScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++previousScore;
}

/**
 * The user's input will be checked whether they have selected the correct or incorrect answer.
 * Depending on the answer, a certain alert message will show. 
 */
function checkAnswer(e){
  
  nextQuestion.classList.remove('hide');
  if (e.target.getAttribute('data-type') === currentQuestion.answer) {
    //alert("Good job! You got it right :)")
    incrementScore();
  } else {
    //alert(`Sorry :( The answer was ${currentQuestion.answer}`);
  }
  currentQuestionIndex = ranNums[x];
  x = x + 1;
  selectNextQuestion();
}

/**
 * Function created for the 'next question' button to appear and pull up the next question
 */
function selectNextQuestion(){
  nextQuestion.addEventListener("click", showQuestion);
}

/* JavaScript code on modal window and close taken from W3 Schools page on modal windows: https://www.w3schools.com/howto/howto_css_modals.asp */
let modal = document.getElementById("instructions-modal");
let instructionsBtn = document.getElementById("instructions");
let closeButton = document.getElementsByClassName("close")[0];

instructionsBtn.addEventListener("click", function(){
  modal.style.display = "block";
})

closeButton.addEventListener("click", function(){
  modal.style.display = "none";oikm
})

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})