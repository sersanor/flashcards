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

// Variables for flashcards
let currentIndex = 0;
let currentSide = "question";
var correctAnswers = 0;
var totalAnswers = 0;

// Functions

function checkFlashcardListInParams(){
  const url = getQueryParam("flashcards");
  if(url){
    loadFlashcardsFromURL(url);
  }
}

function getQueryParam(param) {
  const query = window.location.search.substring(1);
  const params = query.split("&");
  for (let i = 0; i < params.length; i++) {
    const pair = params[i].split("=");
    if (pair[0] === param) {
      return pair[1];
    }
  }
  return null;
}

function shuffleFlashcards () {
  flashcards = shuffleArray(flashcards);
  currentCard = 0;
  updateFlashcard();
};

// function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadFlashcardsFromURL (url) {
  var url = url;
  if (!url) {
    url = prompt("Please enter the URL to load the flashcards from:");
  }
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
};


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

function nextFlashcard() {
  currentIndex++;
  if (currentIndex >= flashcards.length) {
    currentIndex = 0;
  }
  updateFlashcard();
};

function previousFlashcard(){
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = flashcards.length - 1;
  }
  updateFlashcard();
};

function flipFlashcard(){
  if (currentSide === "question") {
    currentSide = "answer";
  } else {
    currentSide = "question";
  }
  updateFlashcard();
};

// function to update the score
function updateScore() {
  var score = document.getElementById("score");
  score.innerHTML = "Score: " + correctAnswers + "/" + totalAnswers + " (" + 
  (correctAnswers / totalAnswers * 100).toFixed(2) + "%)";
}

// Initialize the flashcard

document.addEventListener("DOMContentLoaded", function(){
  checkFlashcardListInParams();
  updateFlashcard();
});

// Function Listeners
document.getElementById("shuffle-button").addEventListener("click", function(){shuffleFlashcards();});
document.getElementById("loadURL-button").addEventListener("click", function(){loadFlashcardsFromURL();});
document.getElementById("previous-button").addEventListener("click", function() { previousFlashcard(); });
document.getElementById("flip-button").addEventListener("click", function() { flipFlashcard(); });
document.getElementById("next-button").addEventListener("click", function() { nextFlashcard(); });

// Keyboard listeners
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "ArrowLeft": document.getElementById("previous-button").click(); break; // Left
    case "ArrowUp": document.getElementById("flip-button").click(); break; // Up
    case "ArrowRight": document.getElementById("next-button").click(); break; // Right
    case "ArrowDown": document.getElementById("flip-button").click(); break; // Up
  }
});
