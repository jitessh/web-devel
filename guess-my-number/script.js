'use strict';

// generate a random number between 1 & 20
let secret = Math.trunc(Math.random() * 20) + 1;

// initialize scores
let score = 20;
let highscore = 0;

const editMessage = (message) => {
  document.querySelector('.message').textContent = message;
}

// start guessing
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // invalid input
    document.querySelector('.message').textContent = 'Enter a number';
  }
  else if (guess === secret) {
    // on success
    editMessage('Hurray! Correct answer.');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  else if(guess !== secret) {
    if (score > 1) {
      // guess again
      editMessage(guess < secret ? 'Too low!' : 'Too high!')
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      // game lost
      editMessage('You lose!');
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = '#E06C75';
    }
  }
});

// play again
document.querySelector('.again').addEventListener('click', function() {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  editMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
