// let random = Math.random();
// if (random < 0.5) {
//   console.log('Your number is less than 0.5!');
// } else {
//   console.log('Your number is greater than 0.5!');
// }
// console.log(random);

// const dayOfWeek = prompt('Enter a day:').toLowerCase();

// if (dayOfWeek === 'monday') {
//   console.log('UGHHH I HATE MONDAYS!');
// } else if (dayOfWeek === 'saturday') {
//   console.log('YAY I LOVE SATURDAYS');
// } else if (dayOfWeek === 'friday') {
//   console.log('FRIDAYS ARE DECENT, SPECIALLY AFTER WORK!');
// } else {
//   console.log('MEH!');
// }

// 0 - 5 - Free
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

// const age = 89;

// if (age < 5) {
//   console.log('You are a baby, you get in for free!');
// } else if (age < 10) {
//   console.log('You are a child, you pay $10!');
// } else if (age < 65) {
//   console.log('You are an aduld, you pay $20!');
// } else {
//   console.log('You are a senior, you pay $10!');
// }

const password = prompt('Please enter a new password: ');

// Password must be 6+ characters
if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('Valid Password!');
  } else {
    console.log('Password cannot contain spaces!');
  }
} else {
  console.log('Password too short! Must be 6+ characters!');
}
// Password must not contain a space
