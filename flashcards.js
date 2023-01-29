// JSON data for flashcards
flashcards = [
{
  question: "What is the capital of France?",
  answer: "Paris"
},
{
  question: "What is the largest ocean on Earth?",
  answer: "Pacific Ocean"
},
{
  question: "Who invented the telephone?",
  answer: "Alexander Graham Bell"
}
];

document.getElementById("shuffle-button").addEventListener("click", function() {
  flashcards = shuffleArray(flashcards);
  currentCard = 0;
  updateFlashcard();
});

// function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.getElementById("loadURL-button").addEventListener("click", function() {
  var url = prompt("Please enter the URL to load the flashcards from:");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      flashcards = data;
      currentCard = 0;
      updateFlashcard();
    }
  };
  xhr.send();
});

// Variables for current flashcard
let currentIndex = 0;
let currentSide = "question";
var correctAnswers = 0;
var totalAnswers = 0;

// Function to update the flashcard
function updateFlashcard() {
  const flashcard = flashcards[currentIndex];
  const flashcardContainer = document.getElementById("flashcard-container");
  
  if (currentSide === "question") {
    flashcardContainer.innerHTML = flashcard.question;
  } else {
    flashcardContainer.innerHTML = flashcard.answer;
  }
}

// Event listeners for next and previous buttons
document.getElementById("next-button").addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= flashcards.length) {
    currentIndex = 0;
  }
  updateFlashcard();
});

document.getElementById("previous-button").addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = flashcards.length - 1;
  }
  updateFlashcard();
});

// Event listener for flip button
document.getElementById("flip-button").addEventListener("click", function() {
  if (currentSide === "question") {
    currentSide = "answer";
  } else {
    currentSide = "question";
  }
  updateFlashcard();
});

// function to update the score
function updateScore() {
  var score = document.getElementById("score");
  score.innerHTML = "Score: " + correctAnswers + "/" + totalAnswers + " (" + 
  (correctAnswers / totalAnswers * 100).toFixed(2) + "%)";
}

// Initialize the flashcard

document.addEventListener("DOMContentLoaded", function(){
  //loadFlashcards();
  updateFlashcard();
});

// Keyboard listener
document.addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    case 37: document.getElementById("previous-button").click(); break; // Left
    case 38: document.getElementById("flip-button").click(); break; // Up
    case 39: document.getElementById("next-button").click(); break; // Right
    case 40: document.getElementById("flip-button").click(); break; // Up
  }
});
