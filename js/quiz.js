'use strict'
const userInputForm = document.getElementById("userInputForm");
const dateAndTime = document.getElementById("dateAndTime");
const quoteOfTheDay = document.getElementById("quoteOfTheDay");

// Form submission handler
userInputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userName = document.getElementById("userName").value;
    alert(`Hello, ${userName}!`);
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
    "This test cant be passed.",
];
function updateQuoteOfTheDay() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteOfTheDay.innerText = `"${quotes[randomIndex]}"`;
}
updateQuoteOfTheDay(); // Initial quote
setInterval(updateQuoteOfTheDay, 10000); // Change every 10 seconds  
// button below
const myButton = document.getElementById('startButton');

function askYesNoQuestion(question) {
let answer;
do {
answer = prompt(question).toLowerCase();
} while (answer !== 'y' && answer !== 'yes' && answer !== 'n' && answer !== 'no');
return answer === 'y' || answer === 'yes';
}

function startGame() {
let userName = prompt('What is your name?');
alert(`Welcome to the USA Comprehension Test, ${userName}!`);

let questions = [
'Does Alaska have the largest area among the 50 states? (yes/no)',
'Is New Jersey known for having the smallest land area in the United States? (yes/no)',
'Does Florida have a cold climate attracting ski enthusiasts annually? (yes/no)',
'Is Colorado famous for its beaches and theme parks? (yes/no)',
'Were the original 13 colonies the first to join the Union? (yes/no)',
'Did Alaska and Hawaii join the Union before the 20th century? (yes/no)',
'Is Hawaii located in the Atlantic Ocean? (yes/no)',
'Does Alaska share a border with Mexico? (yes/no)',
'Does each state in the U.S. have its own government and constitution? (yes/no)',
'Is the federal government responsible for local issues within states? (yes/no)',
'Is California primarily known for its agriculture and oil industries? (yes/no)',
'Does Texas have a significant technology and entertainment industry? (yes/no)',
'Is New York City recognized as a major agricultural center? (yes/no)',
'Are the 50 states similar in size, population, and climate? (yes/no)',
'Is Vermont known for its arid desert landscape? (yes/no)',
'Are Alaska natural resources and wilderness insignificant to its economy? (yes/no)',
'Is the U.S. Constitution ratified by the original 13 colonies before 1776? (yes/no)',
'Does the federal system limit states from having any control over local matters? (yes/no)',
'Is New York City irrelevant in finance, culture, and international diplomacy? (yes/no)',
'Does Hawaii consist entirely of peninsulas? (yes/no)'
];

let correctAnswers = ['yes', 'no', 'no', 'no', 'yes', 'no', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
let score = 0;

for (let i = 0; i < questions.length; i++) {
let userAnswer = askYesNoQuestion(questions[i]);
let correct = correctAnswers[i] === 'yes';
if ((userAnswer && correct) || (!userAnswer && !correct)) {
    alert('Correct!');
    score++;
} else {
    alert('Incorrect!');
}
}

alert(`${userName}, your final score is ${score} out of ${questions.length}.`);
}

myButton.addEventListener("click", function() {
startGame();
});

