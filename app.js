// import functions and grab DOM elements

import { isNumberCorrect } from './utils.js';

const userInput = document.getElementById('user-input');

const button = document.getElementById('submit-guess');

const hint = document.getElementById('hint');

const gameOutcome = document.getElementById('win-lose');

const triesRemaining = document.getElementById('tries-left');

const resetButton = document.getElementById('reset');

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber, 'random');

let numOfTries = 4;
console.log(numOfTries, 'tries');
// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const userNumber = Number(userInput.value);

    numOfTries--;

    console.log(numOfTries, 'tries');

  

    if (isNumberCorrect(randomNumber, userNumber) === 0) {
        hint.textContent = '';
        resetButton.classList.remove('hidden');
        gameOutcome.textContent = 'you win';
    } else if (isNumberCorrect(randomNumber, userNumber) === -1) {
        hint.textContent = 'Too low';
    } else if (isNumberCorrect(randomNumber, userNumber) === 1) {
        return hint.textContent = 'Too high';
    }
  
    triesRemaining.textContent = numOfTries;
    if (numOfTries <= 0) {
        resetButton.classList.remove('hidden');
        return gameOutcome.textContent = ('you lose');
    } 

   



});