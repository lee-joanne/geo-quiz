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
let levelOne = [{
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
    question: "Which city used to be called Constantinople?",
    options: ["Budapest", "Rome", "Istanbul", "Florence"],
    answer: "Istanbul",
  },

  {
    question: "Which country is the famous archaeological site, Pompeii, in?",
    options: ["Spain", "Croatia", "Italy", "Greece"],
    answer: "Italy",
  },

  {
    question: "Which country has the flag with red and white stripes and fifty white stars?",
    options: ["Algeria", "United States of America", "Moldova", "Russia"],
    answer: "United States of America",
  },

  {
    question: "What is the capital city of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montréal"],
    answer: "Ottawa",
  },

  {
    question: "What is the smallest country in the world?",
    options: ["Malta", "Vatican City", "Luxembourg", "Monaco"],
    answer: "Vatican City",
  },

  {
    question: "Which continent is Mexico in?",
    options: ["South America", "Central America", "North America", "Europe"],
    answer: "North America",
  },

  {
    question: "What is the capital city of Brazil?",
    options: ["Brasília", "Rio de Janeiro", "São Paulo", "Manaus"],
    answer: "Brasília",
  },
];

// Quiz questions for level two
let levelTwo = [{
    question: "Which country has the flag with the meaning 'circle of the sun'?",
    options: ["Brazil", "South Korea", "Japan", "Laos"],
    answer: "Japan",
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
    question: "In which Ukranian city did the 1986 Chernobyl Disaster take place?",
    options: ["Lviv", "Dnipro", "Bakhmut", "Pripyat"],
    answer: "Pripyat",
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
    question: "Which city is right on the equator?",
    options: ["Quito", "Cairo", "Kuala Lumpur", "Bangkok"],
    answer: "Quito",
  },
];

// Quiz questions for level three
let levelThree = [{
    question: "Which country has the highest number of timezones?",
    options: ["Russia", "France", "China", "Canada"],
    answer: "France",
  },

  {
    question: "Which countries make up the West Slavs?",
    options: ["Poland, Czech Republic, Slovakia", "Russia, Belarus, Ukraine", "Poland, Bosnia, Croatia", "Slovakia, Slovenia, Austria"],
    answer: "Poland, Czech Republic, Slovakia",
  },

  {
    question: "How many states does Brazil have?",
    options: ["28", "32", "34", "26"],
    answer: "26",
  },

  {
    question: "Which of these countries all have flags of the sun?",
    options: ["Argentina, Macedonia, Nepal, India", "Argentina, Bangladesh, Rwanda, and Uruguay", "Argentina, Niger, Congo, Somalia", "Argentina, Japan, Macedonia, Kenya"],
    answer: "Argentina, Bangladesh, Rwanda, and Uruguay",
  },

  {
    question: "Which of these countries all fall on the Tropic of Cancer?",
    options: ["Egypt, Bolivia, Panama", "Mali, Sudan, Indonesia", "Mexico, Algeria, Libya", "India, Angola, Bahamas"],
    answer: "Mexico, Algeria, Libya",
  },

  {
    question: "Which of these countries is NOT part of the European Union?",
    options: ["Malta", "Lithuania", "Romania", "Switzerland"],
    answer: "Switzerland",
  },

  {
    question: "Which country is Mount Kilimanjaro located in?",
    options: ["Kenya", "Somalia", "Uganda", "Tanzania"],
    answer: "Tanzania",
  },

  {
    question: "How many states does Australia have?",
    options: ["6", "5", "7", "8"],
    answer: "6",
  },

  {
    question: "Which of these islands are both part of French Polynesia?",
    options: ["Bora Bora and Sumatra", "Bali and Tasmania", "Tahiti and Manihi", "Timor and Bonacca"],
    answer: "Tahiti and Manihi",
  },

  {
    question: "Which country has the most islands?",
    options: ["Canada", "Sweden", "Indonesia", "Greece"],
    answer: "Sweden",
  },
];

/* JavaScript code on modal window and close taken from W3 Schools page on modal windows: https://www.w3schools.com/howto/howto_css_modals.asp */
// Modal window will open when user selects 'How To Play' button.
let modal = document.getElementById("instructions-modal");
let instructionsBtn = document.getElementById("instructions");
let closeButton = document.getElementsByClassName("close")[0];

instructionsBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// This code on creating random numbers for the quiz to shuffle is mostly taken from Stack Overflow: https://stackoverflow.com/questions/18806210generating-non-repeating-random-numbers-in-js
// Shuffles the quiz question array.
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let ranNums = [];
let i = nums.length;
let j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i + 1));
  ranNums.push(nums[j]);
  nums.splice(j, 1);
}

let currentQuestionIndex = ranNums[0];
let x = 1;

// Game will run when user clicks 'Let's Play' button. Runs `runLevel()`.
startButton.addEventListener("click", runLevel);

let currentQuestion = {};
let currentRound = 0;

/**
 * Initiates game levels.
 * Increments currentRound.
 * Runs `showGameBoard()`.
 * Runs `showQuestion()`.
 */
function runLevel() {
  currentRound += 1;
  showGameBoard();
  showQuestions();
}

/**
 * Initiates the game.
 * Unhides questionArea and scores.
 * Hides rest of elements.
 */
function showGameBoard() {
  homepageContainer.classList.add('hide');
  questionArea.classList.remove('hide');
  scores.classList.remove('hide');
  levelOneComplete.classList.add('hide');
  levelTwoComplete.classList.add('hide');
  levelThreeComplete.classList.add('hide');
  gameOverMessage.classList.add('hide');
  playAgainButton.classList.add('hide');
}

/**
 * Switch statement will loop through different quiz questions depending on the currentRound.
 * Question choices and question text from quiz questions inserted as text content
 * When all ten questions have been iterated, runs `scoreRequirementConditionCheck()` and `resetQuestionIndex()`
 * After, runs `enabledAndBindEventListenerChoiceButtons()`.
 */
function showQuestions() {
  nextLevelButton.classList.add('hide');
  switch (currentRound) {
    case 1:
      currentQuestion = levelOne[currentQuestionIndex];
      break;
    case 2:
      currentQuestion = levelTwo[currentQuestionIndex];
      break;
    case 3:
      currentQuestion = levelThree[currentQuestionIndex];
      break;
  }

  if (x <= 10) {
    nextButton.classList.add('hide');
    feedbackText.innerHTML = '';
    questionText.textContent = currentQuestion.question;

    for (let i = 0; i < choiceButtons.length; i++) {
      choiceButtons[i].textContent = currentQuestion.options[i];
      choiceButtons[i].setAttribute("data-type", currentQuestion.options[i]);
    }
  } else {
    scoreRequirementConditionCheck();
    resetQuestionIndex();
  }
  enabledAndBindEventListenerChoiceButtons();
}

/**
 * Switch statement which checks the score of the game.
 * If user scores equal to and above 6, user can proceed to level 2.
 * If user scores equal to and above 12, user can proceed to level 3.
 * If user scores equal to and above 20, user has completed the game.
 * Else, the game over message will show.
 */
function scoreRequirementConditionCheck() {
  let score = parseInt(document.getElementById("score").innerText);
  switch (currentRound) {
    case 1:
      if (score >= 6) {
        levelCompleted();
      } else {
        gameOver();
      }
      break;
    case 2:
      if (score >= 12) {
        levelCompleted();
      } else {
        gameOver();
      }
      break;
    case 3:
      if (score >= 20) {
        levelCompleted();
      } else {
        gameOver();
      }
      break;
  }

}

/**
 * Enables the multiple choice options, choiceButtons, to be clickable.
 * Event listener to run `checkAnswer()`.
 */
function enabledAndBindEventListenerChoiceButtons() {
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = false;
    choiceButtons[i].addEventListener("click", checkAnswer);
  }
}

/**
 * The user's input will be checked whether they have selected the correct or incorrect answer.
 * Correct answer shows the feedback message "correct".
 * Incorrect answer shows feedback message containing correct answer.
 * Runs `counter()`.
 * Runs `selectNextQuestion()`.
 * Unhides nextButton.
 */
function checkAnswer(e) {
  if (e.target.getAttribute('data-type') === currentQuestion.answer) {
    feedbackText.innerText = "Correct!";
    incrementScore();
  } else {
    feedbackText.innerText = `Sorry! The answer was ${currentQuestion.answer}`;
  }
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = true;
  }
  counter();
  selectNextQuestion();
  nextButton.classList.remove('hide');
}

/**
 * The score of the game will increment each time the user gets a correct answer.
 */
function incrementScore() {
  let previousScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++previousScore;
}

/**
 * Increments currentQuestionIndex.
 */
function counter() {
  currentQuestionIndex = ranNums[x];
  x += 1;
}

/**
 * nextButton event listener will run `showQuestions()`.
 */
function selectNextQuestion() {
  nextButton.addEventListener("click", showQuestions);
}

/**
 * Switch statement for when user successfully completes the current round.
 * levelOneComplete and levelTwoComplete messages will show for case 1 and case 2, along with nextLevelButton to move onto the next round.
 * `gameComplete()` will run for case 3 when user has completed the game.
 */
function levelCompleted() {
  switch (currentRound) {
    case 1:
      questionArea.classList.add('hide');
      levelOneComplete.classList.remove('hide');
      nextLevelButton.classList.remove('hide');
      break;
    case 2:
      questionArea.classList.add('hide');
      levelTwoComplete.classList.remove('hide');
      nextLevelButton.classList.remove('hide');
      break;
    case 3:
      gameComplete();
      break;
  }
  nextLevelButton.addEventListener("click", runLevel);
}

/**
 * Resets question index when level is complete.
 */
function resetQuestionIndex() {
  x = 1;
  currentQuestionIndex = ranNums[0];
}

/**
 * Question area becomes hidden.
 * gameOverMessage and playAgainButton will pop up.
 * Runs `playAgainEventListener()`.
 */
function gameOver() {
  questionArea.classList.add('hide');
  gameOverMessage.classList.remove('hide');
  playAgainButton.classList.remove('hide');
  playAgainEventListenerRefresh();
}

/**
 * Question area becomes hidden.
 * LevelThreeComplete and playAgainButton will pop up.
 * Runs `playAgainEventListener()`.
 */
function gameComplete() {
  questionArea.classList.add('hide');
  levelThreeComplete.classList.remove('hide');
  playAgainButton.classList.remove('hide');
  playAgainEventListenerRefresh();
}

/**
 * playAgainButton will refresh the page when clicked.
 */
function playAgainEventListenerRefresh() {
  playAgainButton.addEventListener('click', function () {
    location.reload();
  });
}