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

/* JavaScript code on modal window and close taken from W3 Schools page on modal windows: https://www.w3schools.com/howto/howto_css_modals.asp */
let modal = document.getElementById("instructions-modal");
let instructionsBtn = document.getElementById("instructions");
let closeButton = document.getElementsByClassName("close")[0];

instructionsBtn.addEventListener("click", function () {
  modal.style.display = "block";
})

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
})

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

// This code on creating random numbers for the quiz to shuffle is mostly taken from Stack Overflow: https://stackoverflow.com/questions/18806210generating-non-repeating-random-numbers-in-js
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

// Event listener to run `runLevel()`.
startButton.addEventListener("click", runLevel);
let currentQuestion = {}
let currentRound = 0;

/**
 * Initiates levels.
 * Runs `showGameBoard()`.
 * Runs `showQuestion()`.
 * Increments current round number.
 */
function runLevel() {
  currentRound += 1;
  showGameBoard();
  showQuestions();
}

/**
 * Initiates the game.
 * Unhide questionArea and score.
 * Hide rest of elements.
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
};

/**
 * Game will loop through level one questions in the question array and the choices will iterate
 * through the multiple choice buttons.
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
    levelCompleted();
    resetQuestionIndex();
  }
  enabledAndBindEventListenerChoiceButtons();
}

/**
 * Enable the choiceButtons to be clickable.
 * Runs `checkAnswer()`.
 */
function enabledAndBindEventListenerChoiceButtons() {
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
function checkAnswer(e) {
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
function incrementScore() {
  let previousScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++previousScore;
}

/**
 * Increments current question index
 */
function counter() {
  currentQuestionIndex = ranNums[x];
  x += 1;
}

/**
 * Function of EventListener of next button.
 * Runs `showLevelOneQuestions()`.
 */
function selectNextQuestion() {
  nextButton.addEventListener("click", showQuestions);
}

/**
 * Question area is hidden.
 * Level one complete message and next level button will pop up.
 * Eventlistener runs `runLevelTwo()`.
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
 * Resets question index when level is complete
 */
function resetQuestionIndex() {
  x = 1;
  currentQuestionIndex = ranNums[0];
}

/**
 * Question area is hidden.
 * Game over message and play again button will pop up.
 * Runs `playAgainEventListener()`.
 */
function gameOver() {
  currentRound = 0;
  questionArea.classList.add('hide');
  gameOverMessage.classList.remove('hide');
  playAgainButton.classList.remove('hide');
  playAgainEventListenerRefresh();
}

/**
 * Question area is hidden.
 * Game complete message and play again button will pop up.
 * Runs `playAgainEventListener()`.
 */
function gameComplete() {
  currentRound = 0;
  nextLevelButton.classList.add("hide");
  questionArea.classList.add('hide');
  levelThreeComplete.classList.remove('hide');
  playAgainButton.classList.remove('hide');
  playAgainEventListenerRefresh();
}

/**
 * EventListener function for play again button.
 * Refreshes the page to restart score and shuffle
 */
function playAgainEventListenerRefresh() {
  playAgainButton.addEventListener('click', function () {
    location.reload()
  });
}