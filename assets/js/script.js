// Global variables
let homepageContainer = document.getElementById("homepage-container");
let startButton = document.getElementById("start");
let choiceButtons = document.getElementsByClassName("choice-btn");
let questionArea = document.getElementById("question-area");
let levelOneComplete = document.getElementById("level-one-complete");
let levelTwoComplete = document.getElementById("level-two-complete");
let levelThreeComplete = document.getElementById("level-three-complete");
let nextLevelButton = document.getElementById("next-level");
let gameOverMessage = document.getElementById("game-over");
let scores = document.getElementById("scores");
let playAgainButton = document.getElementById("play-again");
let questionText = document.getElementById("question-text");
let nextButton = document.getElementById("next-button");
let feedbackText = document.getElementById("feedback-text");

// Quiz questions for level one
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
    question: "Which country is the famous archaeological site, Pompeii, in?",
    options: ["Spain", "Croatia", "Italy", "Portugal"],
    answer: "Italy",
  },

  {
    question: "Which country has the flag with red and white stripes and fifty white stars?",
    options: ["Algeria", "United States of America", "Moldova", "Russia"],
    answer: "United States of America",
  },

  {
    question: "Which of these countries is NOT part of the European Union?",
    options: ["Malta", "Lithuania", "Romania", "Switzerland"],
    answer: "Switzerland",
  },

  {
    question: "Which country has the flag with the meaning 'circle of the sun'?",
    options: ["Brazil", "South Korea", "Japan", "Laos"],
    answer: "Japan",
  },

  {
    question: "Which continent is Mexico in?",
    options: ["South America", "Central America", "North America", "Europe"],
    answer: "North America",
  },

  {
    question: "Which city is right on the equator?",
    options: ["Quito", "Cairo", "Kuala Lumpur", "Bangkok"],
    answer: "Quito",
  },
]

// Quiz questions for level two
let levelTwo = [
  { 
    question: "What is the smallest country in the world?",
    options: ["Malta", "Vatican City", "Luxembourg", "Monaco"],
    answer: "Vatican City",
  },

  {
    question: "What is the official language of the United States?",
    options: ["English", "English and Spanish", "English and French", "Nothing"],
    answer: "Nothing",
  },

  { 
    question: "What are the official languages of Switzerland?",
    options: ["German, French, English, Italian", "German and Italian", "German, French, Italian, Dutch", "German, French, Italian, Romansh"],
    answer: "German, French, Italian, Romansh",
  },

  {
    question: "How many countries are in the continent of Africa?",
    options: ["54", "45", "56", "48"],
    answer: "54",
  },

  {
    question: "Which country has the most timezones?",
    options: ["Russia", "France", "China", "Canada"],
    answer: "France",
  },

  {
    question: "Which country is Norilsk, the most depressing city in the world, located?",
    options: ["Ukraine", "Finland", "Belarus", "Russia"],
    answer: "Russia",
  },

  {
    question: "Which countries border the famous Iguazu Falls?",
    options: ["Brazil and Argentina", "Brazil, Argentina, Paraquay", "Uruguay, Brazil, Argentina", "Chile and Argentina"],
    answer: "Brazil, Argentina, Paraquay",
  },

  {
    question: "How many provinces and territories are there in Canada?",
    options: ["10 provinces 3 territories", "11 provinces 2 territories", "10 provinces 2 territories", "12 provinces 3 territories"],
    answer: "10 provinces 3 territories",
  },

  {
    question: "Which country borders fourteen countries but only has one time zone?",
    options: ["Syria", "Mali", "Nepal", "China"],
    answer: "China",
  },

  {
    question: "What is the capital city of Turkey?",
    options: ["Ankara", "Istanbul", "Bursa", "Adana"],
    answer: "Ankara",
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

// This code on creating random numbers for the quiz to shuffle is mostly taken from Stack Overflow: https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
ranNums = [];
i = nums.length;
j = 0;

while (i--) {
j = Math.floor(Math.random() * (i+1));
ranNums.push(nums[j]);
nums.splice(j,1);
}

let x = 1;
let currentQuestionIndex = ranNums[0];


// Event listener to run `runLevelOne()`.
startButton.addEventListener("click", runLevelOne);
let currentQuestion = {};

/**
 * Initiates level one.
 * Runs `showGameBoard()`.
 * Runs `showQuestion()`.
 */
function runLevelOne(){
  showGameBoard();
  showLevelOneQuestions();
};

/**
 * Initiates level two.
 * Runs `showGameBoard()`.
 * Runs `showLevelTwoQuestions()`.
 */
function runLevelTwo(){
  showGameBoard();
  showLevelTwoQuestions();
}

/**
 * Initiates the game.
 * Unhide questionArea and score.
 * Hide rest of elements.
 */
function showGameBoard(){
  homepageContainer.classList.add('hide');
  questionArea.classList.remove('hide');
  scores.classList.remove('hide');
  levelOneComplete.classList.add('hide');
  levelTwoComplete.classList.add('hide');
  levelThreeComplete.classList.add('hide');
  gameOverMessage.classList.add('hide');
  playAgainButton.classList.add('hide');
};

/**
 * Game will loop through level one questions in the question array and the choices will iterate
 * through the multiple choice buttons.
 */
function showLevelOneQuestions(){
  if (x <= 10) {
    nextButton.classList.add('hide');
    feedbackText.innerHTML = '';
    currentQuestion = levelOne[ currentQuestionIndex ];
    questionText.textContent = currentQuestion.question;
  
    for (let i = 0; i < choiceButtons.length; i++) {
      choiceButtons[i].textContent = currentQuestion.options[i];
      choiceButtons[i].setAttribute("data-type", currentQuestion.options[i]);
    }
  } else {
    levelOneCompleted();
    resetQuestionIndex();
  }
  enabledAndBindEventListenerChoiceButtons();
}

/**
 * The game will loop through level two questions in the question array and the choices will iterate
 * through the multiple choice buttons
 */
function showLevelTwoQuestions(){
  if (x <= 10) {
    nextButton.classList.add('hide');
    currentQuestion = levelTwo[ currentQuestionIndex ];
    questionText.textContent = currentQuestion.question;
  
    for (let i = 0; i < choiceButtons.length; i++) {
      choiceButtons[i].textContent = currentQuestion.options[i];
      choiceButtons[i].setAttribute("data-type", currentQuestion.options[i]);
    }
  } else {
    levelTwoCompleted();
  }
  enabledAndBindEventListenerChoiceButtons();
}

/**
 * Enable the choiceButtons to be clickable.
 * Runs `checkAnswer()`.
 */
function enabledAndBindEventListenerChoiceButtons(){
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = false;
    choiceButtons[i].addEventListener("click", checkAnswer);
  }
}

/**
 * The user's input will be checked whether they have selected the correct or incorrect answer.
 * Correct answer shows encouraging feedback message.
 * Incorrect answer shows feedback message containing correct answer.
 */
function checkAnswer(e){
  if (e.target.getAttribute('data-type') === currentQuestion.answer) {
    feedbackText.innerText = "Correct!"
    incrementScore();
  } else {
    feedbackText.innerText = `Sorry! The answer was ${currentQuestion.answer}`;
  }
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = true;
    }
  counter()
  selectNextQuestion();
  nextButton.classList.remove('hide');
}

/**
 * The score for the game will increment each time the user gets a correct answer.
 */
function incrementScore(){
  let previousScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++previousScore;
}

function counter(){
  currentQuestionIndex = ranNums[x];
  x = x + 1;
}

/**
 * Function of EventListener of next button.
 * Runs `showLevelOneQuestions()`.
 */
function selectNextQuestion(){
  nextButton.addEventListener("click", showLevelOneQuestions);
}

/**
 * Question area is hidden.
 * Level one complete message and next level button will pop up.
 * Eventlistener runs `runLevelTwo()`.
 */
function levelOneCompleted(){
  questionArea.classList.add('hide');
  levelOneComplete.classList.remove('hide');
  nextLevelButton.classList.remove('hide');
  nextLevelButton.addEventListener("click", runLevelTwo);
}

/**
 * Question area is hidden
 * Level two complete message and next level button will pop up
 * Eventlistener runs `runLevelThree()`.
 */
function levelTwoCompleted(){
  questionArea.classList.add('hide');
  levelTwoComplete.classList.remove('hide');
  nextLevelButton.classList.remove('hide');
  nextLevelButton.addEventListener("click", runLevelThree);
}

/**
 * Resets question index when level is complete
 */
function resetQuestionIndex(){
  x = 1;
  currentQuestionIndex = 0;
}

/**
 * Question area is hidden.
 * Game over message and play again button will pop up.
 * Runs `playAgainEventListener()`.
 */
function gameOver(){
  questionArea.classList.add('hide');
  gameOverMessage.classList.remove('hide');
  playAgainButton.classList.remove('hide');
  playAgainEventListener();
}

/**
 * Question area is hidden.
 * Game complete message and play again button will pop up.
 * Runs `playAgainEventListener()`.
 */
function gameComplete(){
  questionArea.classList.add('hide');
  levelThreeComplete.classList.remove('hide');
  playAgainButton.classList.remove('hide');
  playAgainEventListener();
}

/**
 * EventListener function for play again button.
 * Runs `showHomePage()`.
 */
function playAgainEventListener(){
  playAgainButton.addEventListener("click", showHomePage);
}

/**
 * Restarts the game to the homepage.
 * Unhide HTML element: homepageContainer.
 * Hide rest of elements.
 */
function showHomePage(){
  homepageContainer.classList.remove('hide');
  questionArea.classList.add('hide');
  scores.classList.add('hide');
  levelOneComplete.classList.add('hide');
  levelTwoComplete.classList.add('hide');
  levelThreeComplete.classList.add('hide');
  gameOverMessage.classList.add('hide');
  playAgainButton.classList.add('hide');
}