// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// const SECRET = 'BabyHippo';

// let guess = prompt('Enter the secret code ...');
// while (guess !== SECRET) {
//   guess = prompt('Enter the secret code ...');
// }
// console.log('CONGRATS, YOU GOT THE SECRET!');

// let input = prompt('Hey, say something!');
// while (true) {
//   if (input === 'stop copying me') {
//     break;
//   }
//   input = prompt(input);
// }
// console.log('OK, YOU WIN!');

let maximum = parseInt(prompt('Enter the maximum number: '));
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid number: '));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Enter your first guess!'));
let attemps = 1;

while (parseInt(guess) !== targetNum) {
  attemps++;
  if (guess === 'q') break;
  else if (guess > targetNum) {
    guess = prompt('Too high! Enter a new guess!');
  } else {
    guess = prompt('Too low! Enter a new guess!');
  }
}
if (guess === 'q') {
  console.log('OK, YOU QUIT!');
} else {
  console.log(`You got it! It took you ${attemps} guesses!`);
}
