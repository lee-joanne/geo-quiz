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

// Wait for the DOM to finish loading before modal window access and running the game
document.addEventListener("DOMContentLoaded", function () {
    // JavaScript code on modal window and close taken from W3 Schools page on modal windows: https://www.w3schools.com/howto/howto_css_modals.asp
    // Modal window will open when user selects 'How To Play' button.
    let instructionsModal = document.getElementById("instructions-modal");
    let instructionsBtn = document.getElementById("instructions-button");
    let closeButton = document.getElementsByClassName("close")[0];

    instructionsBtn.addEventListener("click", function () {
        instructionsModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        instructionsModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == instructionsModal) {
            instructionsModal.style.display = "none";
        }
    });
    startButton.addEventListener("click", runLevel);
});

// This code on creating random numbers for the quiz to shuffle is mostly taken from Stack Overflow: https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let ranNums = [];
let i = nums.length;
let j = 0;

// Shuffles the quiz question array
while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
}

let currentQuestionIndex = ranNums[0];
let x = 1;

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
    homepageContainer.classList.add("hide");
    questionArea.classList.remove("hide");
    scores.classList.remove("hide");
    levelOneComplete.classList.add("hide");
    levelTwoComplete.classList.add("hide");
    levelThreeComplete.classList.add("hide");
    gameOverMessage.classList.add("hide");
    playAgainButton.classList.add("hide");
}

/**
 * LevelOne, levelTwo, levelThree questions from questions.js file will iterate depending on currentRound.
 * textContent of quiz question and options become visible to the user.
 * When x>10, runs `scoreRequirementConditionCheck()` and `resetQuestionIndex()`
 * Runs `buttonCheckAnswer()`.
 */
function showQuestions() {
    nextLevelButton.classList.add("hide");
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
        nextButton.classList.add("hide");
        feedbackText.innerHTML = "";
        questionText.textContent = currentQuestion.question;

        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].classList.remove("button-disable");
            choiceButtons[i].textContent = currentQuestion.options[i];
            choiceButtons[i].setAttribute("data-type", currentQuestion.options[i]);
        }
    } else {
        scoreRequirementConditionCheck();
        resetQuestionIndex();
    }
    buttonCheckAnswer();
}

/**
 * Iterates through choiceButtons.
 * choiceButtons event listener runs `checkAnswer()`.
 */
function buttonCheckAnswer() {
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].addEventListener("click", checkAnswer);
    }
}

/**
 * Switch statement will check the current score of the game.
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
 * The user's input will be checked whether they have selected the correct or incorrect answer.
 * Correct answer shows the feedback message "correct".
 * Incorrect answer shows feedback message containing correct answer.
 * Runs `counter()`.
 * Runs `selectNextQuestion()`.
 * Unhides nextButton.
 */
function checkAnswer(e) {
    if (e.target.getAttribute("data-type") === currentQuestion.answer) {
        feedbackText.innerText = "Correct!";
        incrementScore();
    } else {
        feedbackText.innerText = `Sorry! The answer was ${currentQuestion.answer}`;
    }
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].classList.add("button-disable");
    }
    counter();
    selectNextQuestion();
    nextButton.classList.remove("hide");
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
            questionArea.classList.add("hide");
            levelOneComplete.classList.remove("hide");
            nextLevelButton.classList.remove("hide");
            break;
        case 2:
            questionArea.classList.add("hide");
            levelTwoComplete.classList.remove("hide");
            nextLevelButton.classList.remove("hide");
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
    questionArea.classList.add("hide");
    gameOverMessage.classList.remove("hide");
    playAgainButton.classList.remove("hide");
    playAgainEventListenerRefresh();
}

/**
 * Question area becomes hidden.
 * LevelThreeComplete and playAgainButton will pop up.
 * Runs `playAgainEventListener()`.
 */
function gameComplete() {
    questionArea.classList.add("hide");
    levelThreeComplete.classList.remove("hide");
    playAgainButton.classList.remove("hide");
    playAgainEventListenerRefresh();
}

/**
 * playAgainButton will refresh the page when clicked.
 */
function playAgainEventListenerRefresh() {
    playAgainButton.addEventListener("click", function () {
        location.reload();
    });
}