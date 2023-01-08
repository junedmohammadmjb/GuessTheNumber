'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'YEEE YEEE correct decision';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 63;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.guess').value = 6;
// console.log(document.querySelector(' .guess').value);

let scoring = 20;
let rannumber = Math.trunc(Math.random() * 20 + 1);
let highscoring = 0;
const displaymsg = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displaymsg('Enter something correct you moron');
    // document.querySelector('.message').textContent =
    //   'Enter something correct you moron';
  } else if (guess === rannumber) {
    displaymsg('YEEE YEEE correct decision');
    // document.querySelector('.message').textContent =
    //   'YEEE YEEE correct decision';
    document.querySelector('.number').textContent = rannumber;
    document.querySelector('body').style.backgroundColor = '#03AC13';
    document.querySelector('.number').style.width = '90rem';
    if (scoring > highscoring) {
      highscoring = scoring;
      document.querySelector('.highscore').textContent = highscoring;
    }
  } else if (guess !== rannumber) {
    if (scoring > 1) {
      displaymsg(guess > rannumber ? 'Too High!' : 'Too Low!');

      // document.querySelector('.message').textContent =
      //   guess > rannumber ? 'Too High!' : 'Too Low!';
      scoring--;
      document.querySelector('.score').textContent = scoring;
    } else {
      displaymsg('Awww!! you Loose');
      // document.querySelector('.message').textContent = 'Awww!! you Loose';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }

  //  else if (guess > rannumber) {
  //   if (scoring > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     scoring--;
  //     document.querySelector('.score').textContent = scoring;
  //   } else {
  //     document.querySelector('.message').textContent = 'Awww!! you Loose';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#FF0000';
  //   }
  // } else if (guess < rannumber) {
  //   if (scoring > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     scoring--;
  //     document.querySelector('.score').textContent = scoring;
  //   } else {
  //     document.querySelector('.message').textContent = 'Awww!! you Loose';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#FF0000';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  scoring = 20;
  rannumber = Math.trunc(Math.random() * 20 + 1);
  displaymsg('Start Guessing...');
  // document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = scoring;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
