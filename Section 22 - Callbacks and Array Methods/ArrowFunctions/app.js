const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

const movies = [
  {
    title: 'Amadeus',
    score: 99,
  },
  {
    title: 'Stand By Me',
    score: 85,
  },
  {
    title: 'Parasite',
    score: 95,
  },
  {
    title: 'Alien',
    score: 90,
  },
];

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map((movie) => {
  return `${movie.title} - ${movie.score / 10}`;
});

// const add = function (x, y) {
//   return x + y;
// };

// const add = (x, y) => {
//   return x + y;
// };

const square = (num) => {
  return num ** 2;
};

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

const rollDie = () => Math.floor(Math.random() * 6) + 1;

const add = (a, b) => a + b;

const person = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};
