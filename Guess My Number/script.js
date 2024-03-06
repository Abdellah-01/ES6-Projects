'use strict';

let result = document.querySelector('.result1');
let chance = document.querySelector('.result2');
let highScores = document.querySelector('.result3');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let message = document.querySelector('.msg');

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);
// message.textContent = secretNumber;
let score = Number(chance.textContent);
// console.log(score);
let win = Number(highScores.textContent);
// console.log(win);

checkBtn.addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);
  // console.log(input);

  if (!input) {
    result.textContent = '⛔️ No number!';
    document.querySelector('body').style.backgroundColor = '#28282B';
  } else if (input > 20 || input < 0) {
    document.querySelector('.guess').value = '';
    result.textContent = '⛔️ Select number Between 1 to 20!';
  } else if (input === secretNumber) {
    result.textContent = '🎉 Correct Number';
    score--;
    win++;
    chance.textContent = score;
    highScores.textContent = win;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.boxShadow =
      '0 0 200px rgba(0,0,0,0.9) inset';
    document.querySelector('.guess').value = '';
    secretNumber = Math.floor(Math.random() * 20 + 1);
    // console.log(secretNumber);
  } else if (input > secretNumber) {
    result.textContent = '📈 Too High!';
    document.querySelector('body').style.backgroundColor = '#28282B';
    score--;
    chance.textContent = score;
    if (score <= 0) {
      result.textContent = '❌ You Lost';
      score = 0;
      chance.textContent = score;
    }
  } else if (input < secretNumber) {
    result.textContent = '📉 Too Low!';
    document.querySelector('body').style.backgroundColor = '#28282B';
    score--;
    chance.textContent = score;
    if (score <= 0) {
      result.textContent = '❌ You Lost';
      score = 0;
      chance.textContent = score;
    }
  } else if (score <= 0 && win <= 20) {
    score = 0;
    win = 0;
    chance.textContent = score;
    highScores.textContent = win;
    result.textContent = '🎉 You Won ';
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  win = 0;
  document.querySelector('.guess').value = '';
  secretNumber = Math.floor(Math.random() * 20 + 1);
  // console.log(secretNumber);
  // message.textContent = secretNumber;
  chance.textContent = score;
  highScores.textContent = win;
  result.textContent = '🎉 Start Guessing ?';
  document.querySelector('body').style.backgroundColor = '#28282B';
});
