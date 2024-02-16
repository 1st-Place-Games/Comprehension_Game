'use strict';

const userInputForm = document.getElementById("userInputForm");
const dateAndTime = document.getElementById("dateAndTime");
const quoteOfTheDay = document.getElementById("quoteOfTheDay");
const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quizContainer");
const quizForm = document.getElementById("quizForm");
const submitButton = document.getElementById("submitButton");
const audio = document.getElementById('background-audio');
const audioContainer = document.getElementById('audio-container');


let userName;
let questions = [];
let correctAnswers = [];
let currentQuestion = 0;
let score = 0;

// Form submission handler
userInputForm.addEventListener("submit", function(e) {
  e.preventDefault();
  userName = document.getElementById("userName").value;
  alert(`Hello, ${userName}!`);
  initializeQuiz();
});

// Update date and time
function updateDateTime() {
  const now = new Date();
  dateAndTime.innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000); // Update every second

// Change the quote of the day (sample quotes)
const quotes = [
  "The information above is all false.",
  "There are no facts in the information provided above.",
  "This test can't be passed.",
  "Answer to the question 6 is 84",
  "Russia is smaller than Texas",
];

function updateQuoteOfTheDay() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteOfTheDay.innerText = `"${quotes[randomIndex]}"`;
}

updateQuoteOfTheDay(); // Initial quote
setInterval(updateQuoteOfTheDay, 10000); // Change every 10 seconds  
// AUDIO ON SCROLL FUNCTION START
window.addEventListener('scroll', function() {
  if (window.scrollY > 200){ // range of the scroll until it plays
      audio.play();
      audioContainer.style.display = 'block';
  } else {
      audio.pause();
      audioContainer.style.display = 'none';
  }
});
// AUDIO ON SCROLL FUNCTION END
startButton.addEventListener("click", function() {
  initializeQuiz();
});

function initializeQuiz() {
  // Reset variables
  currentQuestion = 0;
  score = 0;

  // Populate questions and correct answers
  questions = [
    { question: 'Does Alaska have the largest area among the 50 states?', answer: 'yes' },
    { question: 'Is New Jersey known for having the smallest land area in the United States?', answer: 'no' },
    { question: 'Does Florida have a cold climate attracting ski enthusiasts annually?', answer: 'no' },
    { question: 'Is Colorado famous for its beaches and theme parks?', answer: 'no' },
    { question: 'Were the original 13 colonies the first to join the Union?', answer: 'yes' },
    { question: 'Did Alaska and Hawaii join the Union before the 20th century?', answer: 'no' },
    { question: 'Is Hawaii located in the Atlantic Oceanu?', answer: 'no' },
    { question: 'Does Alaska share a border with Mexico?', answer: 'no' },
    { question: 'Does each state in the U.S. have its own government and constitution?', answer: 'yes' },
    { question: 'Is the federal government responsible for local issues within states?', answer: 'no' },
    { question: 'Is California primarily known for its agriculture and oil industries?', answer: 'yes' },
    { question: 'Does Texas have a significant technology and entertainment industry?', answer: 'yes' },
    { question: 'Is New York City recognized as a major agricultural center?', answer: 'no' },
    { question: 'Are the 50 states similar in size, population, and climate?', answer: 'no' },
    { question: 'Is Vermont known for its arid desert landscape?', answer: 'no' },
    { question: 'Are Alaska natural resources and wilderness insignificant to its economy?', answer: 'no' },
    { question: 'Is the U.S. Constitution ratified by the original 13 colonies before 1776', answer: 'no' },
    { question: 'Does the federal system limit states from having any control over local matters', answer: 'no' },
    { question: 'Is New York City irrelevant in finance, culture, and international diplomacy', answer: 'no' },
    { question: 'Does Hawaii consist entirely of peninsulas', answer: 'no' },
    { question: '(BONUS QUESTION) Is the answer the question 6 84?', answer: 'yes' },
    { question: '(BONUS QUESTION) According to the rotating quotes is Russia smaller than Texas', answer: 'yes' }
  ];

  // Display the first question
  displayQuestion();

  // Show the quiz container
  quizContainer.style.display = 'block';
  startButton.style.display = 'none';
}

function submitAnswer() {
  const userAnswer = document.querySelector('input[name="answer"]:checked');
  if (!userAnswer) {
    alert('Please select an answer.');
    return;
  }

  const answerValue = userAnswer.value;
  if (answerValue === questions[currentQuestion].answer) {
    alert('Correct!');
    score++;
  } else {
    alert('Incorrect!');
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    // Display the next question
    displayQuestion();
  } else {
    // Quiz completed
    alert(`${userName}, your final score is ${score} out of ${questions.length}.`);
    resetQuiz();
  }
}

function resetQuiz() {
  quizContainer.style.display = 'none';
  startButton.style.display = 'block';
}

function displayQuestion() {
  const currentQuestionData = questions[currentQuestion];
  const questionElement = document.createElement('div');
  questionElement.innerHTML = `
    <p>${currentQuestionData.question}</p>
    <label>
      <input type="radio" name="answer" value="yes"> Yes
    </label>
    <label>
      <input type="radio" name="answer" value="no"> No
    </label>
  `;
  quizForm.innerHTML = ''; // Clear previous question
  quizForm.appendChild(questionElement);
}

// Add an event listener for the submit button
submitButton.addEventListener("click", submitAnswer);